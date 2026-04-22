<?php

use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

Route::prefix('about-us')->group(function () {
    Route::inertia('ceo-welcome', 'about/ceo-welcome')->name('about.ceo-welcome');
    Route::inertia('our-bank', 'about/our-bank')->name('about.our-bank');
    Route::inertia('governance', 'about/governance')->name('about.governance');
    Route::inertia('why-usa', 'about/why-usa')->name('about.why-usa');
    Route::inertia('london-branch', 'about/london-branch')->name('about.london-branch');
    Route::inertia('human-resources', 'about/human-resources')->name('about.human-resources');
});

Route::prefix('private-banking')->group(function () {
    Route::inertia('investment-services', 'private-banking/investment-services')->name('private.investment');
    Route::inertia('credit-solutions', 'private-banking/credit-solutions')->name('private.credit');
    Route::inertia('family-office', 'private-banking/family-office')->name('private.family');
});

Route::prefix('corporate-banking')->group(function () {
    Route::inertia('payment-fx', 'corporate-banking/payment-fx')->name('corporate.payment');
    Route::inertia('trade-finance', 'corporate-banking/trade-finance')->name('corporate.trade');
    Route::inertia('business-cards', 'corporate-banking/business-cards')->name('corporate.cards');
    Route::inertia('corporate-financing', 'corporate-banking/corporate-financing')->name('corporate.financing');
});

Route::prefix('fund-services')->group(function () {
    Route::inertia('fund-business', 'fund-services/fund-business')->name('fund.business');
    Route::inertia('nav-centre', 'fund-services/nav-centre')->name('fund.nav');
});

Route::prefix('quick-services')->group(function () {
    Route::inertia('e-banking-registration', 'quick-services/e-banking')->name('quick.ebanking');
    Route::inertia('credit-cards', 'quick-services/credit-cards')->name('quick.cards');
    Route::inertia('security-awareness', 'quick-services/security')->name('quick.security');
    Route::inertia('third-party-payments', 'quick-services/third-party')->name('quick.third-party');
});

Route::prefix('media')->group(function () {
    Route::inertia('news-events', 'media/news-events')->name('media.news-events');
    Route::inertia('publications', 'media/publications')->name('media.publications');
});

Route::inertia('contact', 'contact')->name('contact');

require __DIR__.'/settings.php';
