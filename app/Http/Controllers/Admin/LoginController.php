<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class LoginController extends Controller
{
    public function show()
    {
        return Inertia::render('admin/login');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $throttleKey = \Illuminate\Support\Str::transliterate(\Illuminate\Support\Str::lower($request->input('email')).'|'.$request->ip());

        if (\Illuminate\Support\Facades\RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = \Illuminate\Support\Facades\RateLimiter::availableIn($throttleKey);

            return back()->withErrors([
                'email' => "Too many login attempts. Please try again in {$seconds} seconds.",
            ]);
        }

        if (auth('admin')->attempt($credentials)) {
            \Illuminate\Support\Facades\RateLimiter::clear($throttleKey);
            $request->session()->regenerate();

            return redirect()->intended('/system-node-mgt/dashboard');
        }

        \Illuminate\Support\Facades\RateLimiter::hit($throttleKey);

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function destroy(Request $request)
    {
        auth('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/system-node-mgt/login');
    }
}
