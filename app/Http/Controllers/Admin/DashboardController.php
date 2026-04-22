<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'funds_count' => \App\Models\NavFund::distinct('isin')->count(),
                'publications_count' => \App\Models\Publication::count(),
                'latest_update' => \App\Models\NavFund::max('date'),
            ]
        ]);
    }
}
