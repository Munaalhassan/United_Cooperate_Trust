<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountGeneratedMail;
use Illuminate\Support\Facades\Log;

class GenerateAccountNumberOnLogin
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Login $event): void
    {
        $user = $event->user;

        // Ensure user is instance of User model and doesn't already have an account number
        if ($user instanceof User && is_null($user->account_number)) {
            $prefix = '412';
            $isUnique = false;
            $newAccountNumber = '';

            // Strictly ensure uniqueness
            while (!$isUnique) {
                $randomDigits = str_pad((string) random_int(0, 9999999), 7, '0', STR_PAD_LEFT);
                $newAccountNumber = $prefix . $randomDigits;

                if (!User::where('account_number', $newAccountNumber)->exists()) {
                    $isUnique = true;
                }
            }

            $user->account_number = $newAccountNumber;
            $user->save();

            // Send Email using Resend via Laravel Mail
            try {
                Mail::to($user->email)->send(new AccountGeneratedMail($user));
            } catch (\Exception $e) {
                Log::error('Failed to send account generation email: ' . $e->getMessage());
            }
        }
    }
}
