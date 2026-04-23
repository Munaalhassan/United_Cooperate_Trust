<?php

use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

require __DIR__.'/settings.php';

Route::get('system-node-mgt/login', [\App\Http\Controllers\Admin\LoginController::class, 'show'])->name('system.mgt.login');
Route::post('system-node-mgt/login', [\App\Http\Controllers\Admin\LoginController::class, 'store'])->name('system.mgt.login.store');
Route::post('system-node-mgt/logout', [\App\Http\Controllers\Admin\LoginController::class, 'destroy'])->name('system.mgt.logout');

Route::middleware(['admin'])->prefix('system-node-mgt')->name('system.mgt.')->group(function () {
    Route::get('dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
    
    // NAV Centre Management
    Route::get('nav-funds', [\App\Http\Controllers\Admin\NavCentreController::class, 'index'])->name('nav-funds.index');
    Route::get('nav-funds/export', [\App\Http\Controllers\Admin\NavCentreController::class, 'export'])->name('nav-funds.export');
    Route::post('nav-funds', [\App\Http\Controllers\Admin\NavCentreController::class, 'store'])->name('nav-funds.store');
    Route::put('nav-funds/{nav_fund}', [\App\Http\Controllers\Admin\NavCentreController::class, 'update'])->name('nav-funds.update');
    Route::delete('nav-funds/{nav_fund}', [\App\Http\Controllers\Admin\NavCentreController::class, 'destroy'])->name('nav-funds.destroy');
    // Publications Management
    Route::get('publications', [\App\Http\Controllers\Admin\PublicationController::class, 'index'])->name('publications.index');
    Route::post('publications', [\App\Http\Controllers\Admin\PublicationController::class, 'store'])->name('publications.store');
    Route::post('publications/{publication}', [\App\Http\Controllers\Admin\PublicationController::class, 'update'])->name('publications.update');
    Route::delete('publications/{publication}', [\App\Http\Controllers\Admin\PublicationController::class, 'destroy'])->name('publications.destroy');

    // Memberships Management
    Route::get('memberships', [\App\Http\Controllers\Management\MembershipManagementController::class, 'index'])->name('memberships.index');
    Route::get('memberships/create', [\App\Http\Controllers\Management\MembershipManagementController::class, 'create'])->name('memberships.create');
    Route::get('memberships/{registration}/edit', [\App\Http\Controllers\Management\MembershipManagementController::class, 'edit'])->name('memberships.edit');
    Route::get('memberships/{registration}/view-id', [\App\Http\Controllers\Management\MembershipManagementController::class, 'viewId'])->name('memberships.view-id');
    Route::post('memberships', [\App\Http\Controllers\Management\MembershipManagementController::class, 'store'])->name('memberships.store');
    Route::put('memberships/{registration}', [\App\Http\Controllers\Management\MembershipManagementController::class, 'update'])->name('memberships.update');
    Route::delete('memberships/{registration}', [\App\Http\Controllers\Management\MembershipManagementController::class, 'destroy'])->name('memberships.destroy');

    // E-Banking Forms Management
    Route::get('ebanking-forms', [\App\Http\Controllers\Admin\EBankingFormController::class, 'index'])->name('ebanking-forms.index');
    Route::post('ebanking-forms', [\App\Http\Controllers\Admin\EBankingFormController::class, 'store'])->name('ebanking-forms.store');
    Route::put('ebanking-forms/{ebanking_form}', [\App\Http\Controllers\Admin\EBankingFormController::class, 'update'])->name('ebanking-forms.update');
    Route::delete('ebanking-forms/{ebanking_form}', [\App\Http\Controllers\Admin\EBankingFormController::class, 'destroy'])->name('ebanking-forms.destroy');

    // News & Events Management
    Route::get('news-events', [\App\Http\Controllers\Admin\NewsEventController::class, 'index'])->name('news-events.index');
    Route::post('news-events', [\App\Http\Controllers\Admin\NewsEventController::class, 'store'])->name('news-events.store');
    Route::post('news-events/{news_event}', [\App\Http\Controllers\Admin\NewsEventController::class, 'update'])->name('news-events.update');
    Route::delete('news-events/{news_event}', [\App\Http\Controllers\Admin\NewsEventController::class, 'destroy'])->name('news-events.destroy');

    // Profile Management
    Route::get('profile', [\App\Http\Controllers\Admin\ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [\App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');
    Route::put('password', [\App\Http\Controllers\Admin\ProfileController::class, 'updatePassword'])->name('password.update');

    // Notifications Management
    Route::get('notifications', [\App\Http\Controllers\Admin\NotificationController::class, 'index'])->name('notifications.index');
    Route::post('notifications/{id}/read', [\App\Http\Controllers\Admin\NotificationController::class, 'markAsRead'])->name('notifications.read');
    Route::post('notifications/read-all', [\App\Http\Controllers\Admin\NotificationController::class, 'markAllAsRead'])->name('notifications.read-all');
    Route::delete('notifications/{id}', [\App\Http\Controllers\Admin\NotificationController::class, 'destroy'])->name('notifications.destroy');
    Route::delete('notifications/clear-all', [\App\Http\Controllers\Admin\NotificationController::class, 'clearAll'])->name('notifications.clear-all');
});

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::get('dashboard', function () {
    $user = auth()->user();
    
    return $user->currentTeam 
        ? redirect()->route('team.internal-dashboard', ['current_team' => $user->currentTeam->slug]) 
        : redirect('/');
})->middleware(['auth'])->name('dashboard');

Route::prefix('{current_team}')
    ->name('team.')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('internal-dashboard');
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
    Route::get('fund-business', function() { return inertia('fund-services/fund-business'); })->name('fund.business');
    Route::get('nav-centre', [\App\Http\Controllers\Public\NavCentreController::class, 'index'])->name('fund.nav');
});

Route::prefix('quick-services')->group(function () {
    Route::get('e-banking-registration', [\App\Http\Controllers\Public\EBankingRegistrationController::class, 'index'])->name('quick.ebanking');

    Route::inertia('credit-cards', 'quick-services/credit-cards')->name('quick.cards');
    Route::inertia('security-awareness', 'quick-services/security')->name('quick.security');
    Route::inertia('third-party-payments', 'quick-services/third-party')->name('quick.third-party');
});

Route::prefix('media')->group(function () {
    Route::get('news-events', [\App\Http\Controllers\Public\NewsEventController::class, 'index'])->name('media.news-events');
    Route::get('news-events/{slug}', [\App\Http\Controllers\Public\NewsEventController::class, 'show'])->name('media.news-detail');
    Route::get('publications', [\App\Http\Controllers\Public\PublicationController::class, 'index'])->name('media.publications');
});

Route::prefix('legal')->group(function () {
    Route::inertia('legal-disclaimer', 'legal/legal-disclaimer')->name('legal.disclaimer');
    Route::inertia('complaints', 'legal/complaints')->name('legal.complaints');
    Route::inertia('terms-of-use', 'legal/terms-of-use')->name('legal.terms');
    Route::inertia('personal-data-notice', 'legal/personal-data-notice')->name('legal.data-notice');
});

Route::inertia('contact', 'contact')->name('contact');

// Overriding default registration to be Membership Application
Route::get('register', [\App\Http\Controllers\Public\MembershipApplicationController::class, 'index'])->name('register');
Route::post('register', [\App\Http\Controllers\Public\MembershipApplicationController::class, 'store'])->name('membership.store');
Route::get('membership-signup', [\App\Http\Controllers\Public\MembershipApplicationController::class, 'index'])->name('membership.signup');
// E-Banking registration page is handled by EBankingRegistrationController now
// Route::get('quick-services/e-banking-registration', [\App\Http\Controllers\Public\MembershipApplicationController::class, 'index'])->name('quick.ebanking.registration');

// Admin and settings routes handled above

Route::get('sitemap.xml', function () {
    $urls = [
        ['loc' => url('/'), 'priority' => '1.0'],
        ['loc' => url('/about-us/our-bank'), 'priority' => '0.8'],
        ['loc' => url('/about-us/ceo-welcome'), 'priority' => '0.7'],
        ['loc' => url('/private-banking/investment-services'), 'priority' => '0.9'],
        ['loc' => url('/corporate-banking/payment-fx'), 'priority' => '0.9'],
        ['loc' => url('/contact'), 'priority' => '0.8'],
    ];

    $content = '<?xml version="1.0" encoding="UTF-8"?>';
    $content .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    foreach ($urls as $url) {
        $content .= '<url>';
        $content .= '<loc>' . $url['loc'] . '</loc>';
        $content .= '<lastmod>' . now()->toAtomString() . '</lastmod>';
        $content .= '<changefreq>weekly</changefreq>';
        $content .= '<priority>' . $url['priority'] . '</priority>';
        $content .= '</url>';
    }
    $content .= '</urlset>';

    return response($content)->header('Content-Type', 'text/xml');
});
