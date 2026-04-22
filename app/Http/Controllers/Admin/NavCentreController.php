<?php

namespace App\Http\Controllers\Admin;

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

        $funds = $query->orderBy('name')->paginate(20)->withQueryString();
        
        return Inertia::render('admin/nav-funds/index', [
            'funds' => $funds,
            'filters' => $request->only(['search'])
        ]);
    }

    public function export()
    {
        $funds = NavFund::orderBy('name')->get();
        
        $callback = function() use ($funds) {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['Name', 'ISIN', 'Currency', 'Date', 'Price', 'Last Price', 'Change', 'Yield']);

            foreach ($funds as $fund) {
                fputcsv($file, [
                    $fund->name,
                    $fund->isin,
                    $fund->ccy,
                    $fund->date->format('Y-m-d'),
                    $fund->price,
                    $fund->last_price,
                    $fund->change,
                    $fund->yield
                ]);
            }
            fclose($file);
        };

        return response()->stream($callback, 200, [
            "Content-type" => "text/csv",
            "Content-Disposition" => "attachment; filename=nav-funds-export-" . date('Y-m-d') . ".csv",
            "Pragma" => "no-cache",
            "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
            "Expires" => "0"
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'isin' => 'required|string|max:255|unique:nav_funds',
            'ccy' => 'required|string|max:3',
            'date' => 'required|date',
            'price' => 'required|numeric',
            'last_price' => 'required|numeric',
            'change' => 'required|numeric',
            'yield' => 'required|numeric',
        ]);

        NavFund::create($validated);

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Fund entry created successfully.'
        ]);
    }

    public function update(Request $request, NavFund $navFund)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'isin' => 'required|string|max:255|unique:nav_funds,isin,' . $navFund->id,
            'ccy' => 'required|string|max:3',
            'date' => 'required|date',
            'price' => 'required|numeric',
            'last_price' => 'required|numeric',
            'change' => 'required|numeric',
            'yield' => 'required|numeric',
        ]);

        $navFund->update($validated);

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Fund entry updated successfully.'
        ]);
    }

    public function destroy(NavFund $navFund)
    {
        $navFund->delete();

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Fund entry deleted successfully.'
        ]);
    }
}
