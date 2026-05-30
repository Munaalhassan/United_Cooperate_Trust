<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountGeneratedMail;

class EBankingController extends Controller
{
    public function dashboard(Request $request)
    {
        return Inertia::render('ebanking/dashboard', [
            // Inertia middleware already provides auth.user
        ]);
    }

    public function generateAccount(Request $request)
    {
        $user = $request->user();

        if ($user->account_number) {
            return back()->with('error', 'Account number already generated.');
        }

        // Generate 412 + 7 random digits
        $constant = '412';
        $random = str_pad((string) random_int(0, 9999999), 7, '0', STR_PAD_LEFT);
        $accountNumber = $constant . $random;

        // Ensure unique
        while (\App\Models\User::where('account_number', $accountNumber)->exists()) {
            $random = str_pad((string) random_int(0, 9999999), 7, '0', STR_PAD_LEFT);
            $accountNumber = $constant . $random;
        }

        $user->account_number = $accountNumber;
        $user->save();

        try {
            Mail::to($user->email)->send(new AccountGeneratedMail($user));
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('Failed to send account generation email: ' . $e->getMessage());
        }

        return back()->with('success', 'Account number generated successfully!');
    }
}
