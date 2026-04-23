<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Models\EBankingRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admin;
use App\Notifications\SystemNotification;

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
            'dl_upload' => 'nullable|image|max:5120',
        ]);

        if ($request->hasFile('dl_upload')) {
            $path = $request->file('dl_upload')->store('memberships', 'public');
            $validated['dl_upload'] = $path;
        }

        EBankingRegistration::create($validated);

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::all()->each(fn($a) => $a->notify(new SystemNotification(
            'Manual Membership Added',
            "{$admin->name} manually added a new member: {$validated['first_name']} {$validated['last_name']}",
            route('system.mgt.memberships.index'),
            'success'
        )));

        return redirect()->route('system.mgt.memberships.index')->with('success', 'Member added successfully.');
    }

    public function update(Request $request, EBankingRegistration $registration)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:pending,approved,rejected',
            'admin_notes' => 'nullable|string',
        ]);

        $registration->update($validated);

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'Membership Status Updated',
            "{$admin->name} updated membership for {$registration->first_name} to " . strtoupper($validated['status']),
            route('system.mgt.memberships.index'),
            'info'
        )));

        return back()->with('success', 'Membership updated successfully.');
    }

    public function destroy(EBankingRegistration $registration)
    {
        $registration->delete();

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'Membership Deleted',
            "{$admin->name} deleted a membership record.",
            route('system.mgt.memberships.index'),
            'warning'
        )));

        return back()->with('success', 'Membership deleted successfully.');
    }
}
