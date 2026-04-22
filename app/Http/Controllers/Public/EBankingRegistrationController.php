<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\EBankingForm;
use Inertia\Inertia;

class EBankingRegistrationController extends Controller
{
    public function index()
    {
        $forms = EBankingForm::where('is_active', true)->get()->groupBy('category');
        
        return Inertia::render('quick-services/e-banking-registration', [
            'forms' => $forms
        ]);
    }
}
