<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        $admin = auth('admin')->user();
        
        return Inertia::render('admin/notifications/index', [
            'notifications' => $admin->notifications()->paginate(15),
            'unreadCount' => $admin->unreadNotifications()->count(),
        ]);
    }

    public function markAsRead(Request $request, $id)
    {
        $notification = auth('admin')->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        if ($request->has('redirect')) {
            return redirect($request->redirect);
        }

        return back()->with('success', 'Notification marked as read.');
    }

    public function markAllAsRead()
    {
        auth('admin')->user()->unreadNotifications->markAsRead();

        return back()->with('success', 'All notifications marked as read.');
    }

    public function destroy($id)
    {
        auth('admin')->user()->notifications()->findOrFail($id)->delete();

        return back()->with('success', 'Notification deleted.');
    }

    public function clearAll()
    {
        auth('admin')->user()->notifications()->delete();

        return back()->with('success', 'All notifications cleared.');
    }
}
