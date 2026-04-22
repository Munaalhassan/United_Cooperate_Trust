<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Publication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Admin;
use App\Notifications\SystemNotification;

class PublicationController extends Controller
{
    public function index(Request $request)
    {
        $query = Publication::query();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('category', 'like', "%{$search}%");
            });
        }

        if ($request->filled('category') && $request->category !== 'ALL') {
            $query->where('category', $request->category);
        }

        $publications = $query->latest('published_at')->paginate(20)->withQueryString();
        
        return Inertia::render('admin/publications/index', [
            'publications' => $publications,
            'filters' => $request->only(['search', 'category']),
            'categories' => [
                'ALL',
                'Annual Reports',
                'AML',
                'PSD2',
                'Code of Conduct',
                'Conditions',
                'Payment Instructions',
                'Tariffs',
                'MIFID II',
                'Benchmark Interest Rate Reforms',
                'London Branch'
            ]
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'published_at' => 'required|date',
            'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx|max:10240', // 10MB max
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('publications', 'public');
            $validated['file_path'] = $path;
            $validated['file_type'] = strtoupper($file->getClientOriginalExtension());
            $validated['file_size'] = $this->formatBytes($file->getSize());
        }

        $pub = Publication::create($validated);

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::all()->each(fn($a) => $a->notify(new SystemNotification(
            'New Publication Uploaded',
            "{$admin->name} uploaded a new document: {$pub->title}",
            route('system.mgt.publications.index'),
            'success'
        )));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Publication created successfully.'
        ]);
    }

    public function update(Request $request, Publication $publication)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'published_at' => 'required|date',
            'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx|max:10240',
        ]);

        if ($request->hasFile('file')) {
            // Delete old file
            if ($publication->file_path) {
                Storage::disk('public')->delete($publication->file_path);
            }

            $file = $request->file('file');
            $path = $file->store('publications', 'public');
            $validated['file_path'] = $path;
            $validated['file_type'] = strtoupper($file->getClientOriginalExtension());
            $validated['file_size'] = $this->formatBytes($file->getSize());
        }

        $publication->update($validated);

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'Publication Updated',
            "{$admin->name} updated the document: {$publication->title}",
            route('system.mgt.publications.index'),
            'info'
        )));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Publication updated successfully.'
        ]);
    }

    public function destroy(Publication $publication)
    {
        if ($publication->file_path) {
            Storage::disk('public')->delete($publication->file_path);
        }

        $publication->delete();

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'Publication Deleted',
            "{$admin->name} deleted a publication.",
            route('system.mgt.publications.index'),
            'warning'
        )));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Publication deleted successfully.'
        ]);
    }

    private function formatBytes($bytes, $precision = 2) {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);
        return round($bytes, $precision) . ' ' . $units[$pow];
    }
}
