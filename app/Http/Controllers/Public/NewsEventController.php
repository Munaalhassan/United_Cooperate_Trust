<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\NewsEvent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsEventController extends Controller
{
    public function index()
    {
        $posts = NewsEvent::where('is_published', true)
            ->latest('date')
            ->paginate(9);

        return Inertia::render('media/news-events', [
            'posts' => $posts
        ]);
    }

    public function show($slug)
    {
        $post = NewsEvent::with('images')->where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return Inertia::render('media/news-detail', [
            'post' => $post
        ]);
    }
}
