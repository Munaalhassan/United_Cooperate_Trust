<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

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

        $newsEvents = $query->latest('date')->paginate(20)->withQueryString();
        
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

        NewsEvent::create($validated);

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

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'News/Event deleted successfully.'
        ]);
    }
}
