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
        $funds = NavFund::orderBy('name')->paginate(20);
        
        return Inertia::render('admin/nav-funds/index', [
            'funds' => $funds
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
