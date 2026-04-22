<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EBankingForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Admin;
use App\Notifications\SystemNotification;

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

        $form = EBankingForm::create($validated);

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::all()->each(fn($a) => $a->notify(new SystemNotification(
            'New E-Banking Form Uploaded',
            "{$admin->name} added a new form: {$form->title}",
            route('system.mgt.ebanking-forms.index'),
            'success'
        )));

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

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'E-Banking Form Updated',
            "{$admin->name} updated the form: {$ebanking_form->title}",
            route('system.mgt.ebanking-forms.index'),
            'info'
        )));

        return back()->with('success', 'Form updated successfully.');
    }

    public function destroy(EBankingForm $ebanking_form)
    {
        $oldPath = str_replace('/storage/', '', $ebanking_form->file_path);
        Storage::disk('public')->delete($oldPath);
        
        $ebanking_form->delete();

        // Notify Admins
        $admin = auth('admin')->user();
        Admin::where('id', '!=', $admin->id)->get()->each(fn($a) => $a->notify(new SystemNotification(
            'E-Banking Form Deleted',
            "{$admin->name} deleted a form.",
            route('system.mgt.ebanking-forms.index'),
            'warning'
        )));

        return back()->with('success', 'Form deleted successfully.');
    }
}
