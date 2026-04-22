<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\NavFund;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NavCentreController extends Controller
{
    public function index(Request $request)
    {
        $query = NavFund::query();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('isin', 'like', "%{$search}%");
            });
        }

        if ($request->filled('currency') && $request->currency !== 'All Currencies') {
            $query->where('ccy', $request->currency);
        }

        if ($request->filled('date')) {
            $query->whereDate('date', $request->date);
        } else {
            // Default to showing the latest entry for each unique ISIN
            // This ensures all funds are visible even if they have different latest dates
            $query->whereIn('id', function($q) {
                $q->selectRaw('MAX(id)')
                  ->from('nav_funds')
                  ->groupBy('isin');
            });
        }

        $funds = $query->orderBy('name')->paginate(15)->withQueryString();

        return Inertia::render('fund-services/nav-centre', [
            'funds' => $funds,
            'filters' => $request->only(['search', 'currency', 'date']),
            'latestDate' => NavFund::max('date')
        ]);
    }
}
