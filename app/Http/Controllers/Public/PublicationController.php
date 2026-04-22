<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Publication;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicationController extends Controller
{
    public function index(Request $request)
    {
        $query = Publication::query();

        if ($request->filled('category') && $request->category !== 'ALL') {
            $query->where('category', $request->category);
        }

        $publications = $query->latest('published_at')->get();
        
        return Inertia::render('media/publications', [
            'publications' => $publications,
            'filters' => $request->only(['category'])
        ]);
    }
}
