<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Models\EBankingRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembershipManagementController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/memberships/index', [
            'registrations' => EBankingRegistration::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/memberships/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'dob' => 'required|date',
            'nationality' => 'required|string|max:255',
            'ssn' => 'required|string|max:255',
            'dl' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:8',
            'account_type' => 'required|string|max:255',
            'occupation' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'dl_upload' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('dl_upload')) {
            $path = $request->file('dl_upload')->store('memberships', 'public');
            $validated['dl_upload'] = $path;
        }

        EBankingRegistration::create($validated);

        return redirect()->route('system.mgt.memberships.index')->with('success', 'Member added successfully.');
    }

    public function update(Request $request, EBankingRegistration $registration)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:pending,approved,rejected',
            'admin_notes' => 'nullable|string',
        ]);

        $registration->update($validated);

        return back()->with('success', 'Membership updated successfully.');
    }

    public function destroy(EBankingRegistration $registration)
    {
        $registration->delete();

        return back()->with('success', 'Membership deleted successfully.');
    }
}
