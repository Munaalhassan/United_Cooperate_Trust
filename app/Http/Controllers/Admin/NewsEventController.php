<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\Admin;
use App\Notifications\SystemNotification;

class NewsEventController extends Controller
{
    public function index(Request $request)
    {
        $query = NewsEvent::query();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        if ($request->filled('type') && $request->type !== 'ALL') {
            $query->where('type', $request->type);
        }

        $newsEvents = $query->with('images')->latest('date')->paginate(20)->withQueryString();
        
        return Inertia::render('admin/news-events/index', [
            'newsEvents' => $newsEvents,
            'filters' => $request->only(['search', 'type']),
            'types' => ['ALL', 'News', 'Event']
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|in:News,Event',
            'date' => 'required|date',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|max:5120', // 5MB max
            'is_published' => 'required|boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']);
        
        // Ensure slug is unique
        $originalSlug = $validated['slug'];
        $count = 1;
        while (NewsEvent::where('slug', $validated['slug'])->exists()) {
            $validated['slug'] = $originalSlug . '-' . $count++;
        }

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('news-events', 'public');
            $validated['image_path'] = $path;
        }

        $newsEvent = NewsEvent::create($validated);

        // Handle Gallery Images
        if ($request->has('gallery')) {
            foreach ($request->file('gallery', []) as $index => $file) {
                $path = $file->store('news-events/gallery', 'public');
                $newsEvent->images()->create([
                    'image_path' => $path,
                    'caption' => $request->input("gallery_captions.{$index}"),
                    'sort_order' => $index
                ]);
            }
        }

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::all()->each(fn($a) => $a->notify(new SystemNotification(
            'New News/Event Created',
            "{$admin->name} created a new {$newsEvent->type}: {$newsEvent->title}",
            route('system.mgt.news-events.index'),
            'success'
        )));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'News/Event created successfully.'
        ]);
    }

    public function update(Request $request, NewsEvent $newsEvent)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|in:News,Event',
            'date' => 'required|date',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'is_published' => 'required|boolean',
        ]);

        if ($newsEvent->title !== $validated['title']) {
            $validated['slug'] = Str::slug($validated['title']);
            $originalSlug = $validated['slug'];
            $count = 1;
            while (NewsEvent::where('slug', $validated['slug'])->where('id', '!=', $newsEvent->id)->exists()) {
                $validated['slug'] = $originalSlug . '-' . $count++;
            }
        }

        if ($request->hasFile('image')) {
            if ($newsEvent->image_path) {
                Storage::disk('public')->delete($newsEvent->image_path);
            }
            $path = $request->file('image')->store('news-events', 'public');
            $validated['image_path'] = $path;
        }

        $newsEvent->update($validated);

        // Handle Gallery Deletions
        if ($request->has('deleted_gallery_ids')) {
            $deletedIds = $request->input('deleted_gallery_ids');
            $imagesToDelete = $newsEvent->images()->whereIn('id', $deletedIds)->get();
            foreach ($imagesToDelete as $image) {
                Storage::disk('public')->delete($image->image_path);
                $image->delete();
            }
        }

        // Handle New Gallery Images
        if ($request->has('gallery')) {
            $currentMaxOrder = $newsEvent->images()->max('sort_order') ?? -1;
            foreach ($request->file('gallery', []) as $index => $file) {
                $path = $file->store('news-events/gallery', 'public');
                $newsEvent->images()->create([
                    'image_path' => $path,
                    'caption' => $request->input("gallery_captions.{$index}"),
                    'sort_order' => $currentMaxOrder + $index + 1
                ]);
            }
        }

        // Handle Existing Gallery Captions Update
        if ($request->has('existing_gallery_captions')) {
            foreach ($request->input('existing_gallery_captions') as $id => $caption) {
                $newsEvent->images()->where('id', $id)->update(['caption' => $caption]);
            }
        }


        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'News/Event Updated',
            "{$admin->name} updated the {$newsEvent->type}: {$newsEvent->title}",
            route('system.mgt.news-events.index'),
            'info'
        )));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'News/Event updated successfully.'
        ]);
    }

    public function destroy(NewsEvent $newsEvent)
    {
        if ($newsEvent->image_path) {
            Storage::disk('public')->delete($newsEvent->image_path);
        }

        $newsEvent->delete();

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'News/Event Deleted',
            "{$admin->name} deleted a news/event item.",
            route('system.mgt.news-events.index'),
            'warning'
        )));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'News/Event deleted successfully.'
        ]);
    }
}
