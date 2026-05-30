<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\EBankingRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admin;
use App\Notifications\SystemNotification;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules\Password;

class MembershipApplicationController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/register');
    }

    public function store(Request $request, CreateNewUser $creator)
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
            'password' => ['required', 'string', Password::min(8)->letters()->mixedCase()->numbers()->symbols()],
            'account_type' => 'required|string|max:255',
            'occupation' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'dl_upload' => 'nullable|image|max:5120',
        ]);

        if ($request->hasFile('dl_upload')) {
            $path = $request->file('dl_upload')->store('memberships', 'public');
            $validated['dl_upload'] = $path;
        }

        DB::transaction(function () use ($validated, $request, $creator) {
            $reg = EBankingRegistration::create($validated);
            
            // Ensure input has country and password_confirmation for CreateNewUser
            $inputForUser = $request->all();
            $inputForUser['country'] = $validated['nationality'];
            $user = $creator->create($inputForUser);

            // Notify Admins
            Admin::all()->each(fn($a) => $a->notify(new SystemNotification(
                'New Membership Application',
                "A new application has been submitted by {$validated['first_name']} {$validated['last_name']} ({$validated['email']})",
                route('system.mgt.memberships.index', ['review' => $reg->id]),
                'info'
            )));
        });

        return redirect()->route('login')->with('status', 'Your membership application has been submitted successfully! Please log in to securely generate your account number.');
    }
}
