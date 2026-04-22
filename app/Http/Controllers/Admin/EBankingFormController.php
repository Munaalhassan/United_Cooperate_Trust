<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EBankingForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EBankingFormController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/ebanking-forms/index', [
            'forms' => EBankingForm::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'file' => 'required|file|max:10240', // 10MB max
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('ebanking-forms', 'public');
            $validated['file_path'] = Storage::url($path);
        }

        EBankingForm::create($validated);

        return back()->with('success', 'Form uploaded successfully.');
    }

    public function update(Request $request, EBankingForm $ebanking_form)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'file' => 'nullable|file|max:10240',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('file')) {
            // Delete old file if exists
            $oldPath = str_replace('/storage/', '', $ebanking_form->file_path);
            Storage::disk('public')->delete($oldPath);

            $path = $request->file('file')->store('ebanking-forms', 'public');
            $validated['file_path'] = Storage::url($path);
        }

        $ebanking_form->update($validated);

        return back()->with('success', 'Form updated successfully.');
    }

    public function destroy(EBankingForm $ebanking_form)
    {
        $oldPath = str_replace('/storage/', '', $ebanking_form->file_path);
        Storage::disk('public')->delete($oldPath);
        
        $ebanking_form->delete();

        return back()->with('success', 'Form deleted successfully.');
    }
}
