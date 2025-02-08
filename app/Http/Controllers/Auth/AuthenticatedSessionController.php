<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Authenticate user
        $request->authenticate();
    
        // Regenerate session to prevent session fixation attacks
        $request->session()->regenerate();

        // Debugging: Log the current usertype and session data
        Log::info('Logged in user type: ' . $request->user()->usertype);
        Log::info('Session data: ' . print_r($request->session()->all(), true));

        // Clear the intended URL explicitly in case it's incorrectly set
        $request->session()->forget('url.intended');
    
        // Check the usertype to properly redirect
        if ($request->user()->usertype === "admin") {
            // Log debug for admin redirection
            Log::info('Redirecting to admin dashboard');
            return redirect()->route('admin.dashboard');
        }
    
        // Log debug for user redirection
        Log::info('Redirecting to user dashboard');
        return redirect()->route('dashboard');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
