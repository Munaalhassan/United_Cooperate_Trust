import React from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link, router } from '@inertiajs/react';
import { 
    Bell, 
    Check, 
    Trash2, 
    Clock, 
    Info, 
    AlertCircle, 
    CheckCircle2,
    MoreVertical,
    CheckCheck,
    X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { timeAgo } from '@/lib/utils';
import { read, readAll, destroy as notifDestroy, clearAll as notifClearAll } from '@/routes/system/mgt/notifications';

interface NotificationData {
    title: string;
    message: string;
    action_url?: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

interface Notification {
    id: string;
    type: string;
    data: NotificationData;
    read_at: string | null;
    created_at: string;
}

interface Props {
    notifications: {
        data: Notification[];
        links: any[];
        total: number;
    };
    unreadCount: number;
}

export default function NotificationsIndex({ notifications, unreadCount }: Props) {
    
    const markAsRead = (id: string) => {
        router.post(read.url(id), {}, {
            preserveScroll: true,
        });
    };

    const markAllAsRead = () => {
        router.post(readAll.url(), {}, {
            preserveScroll: true,
        });
    };

    const deleteNotification = (id: string) => {
        router.delete(notifDestroy.url(id), {
            preserveScroll: true,
        });
    };

    const clearAll = () => {
        router.delete(notifClearAll.url(), {
            preserveScroll: true,
        });
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'success': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
            case 'warning': return <AlertCircle className="w-5 h-5 text-amber-500" />;
            case 'error': return <X className="w-5 h-5 text-red-500" />;
            default: return <Info className="w-5 h-5 text-brand-blue" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'success': return 'border-l-green-500 bg-green-50/30';
            case 'warning': return 'border-l-amber-500 bg-amber-50/30';
            case 'error': return 'border-l-red-500 bg-red-50/30';
            default: return 'border-l-brand-blue bg-blue-50/30';
        }
    };

    return (
        <AdminLayout title="System Notifications">
            <Head title="Notifications | Admin" />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-3">
                            <Bell className="w-6 h-6 text-brand-blue" />
                            Notifications
                            {unreadCount > 0 && (
                                <span className="bg-brand-blue text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                    {unreadCount > 9 ? '9+' : unreadCount} NEW
                                </span>
                            )}
                        </h2>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">Stay updated with system activities and member requests</p>
                    </div>

                    <div className="flex items-center gap-3">
                        {unreadCount > 0 && (
                            <Button 
                                onClick={markAllAsRead}
                                variant="outline"
                                className="h-10 border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-600 rounded-none hover:bg-slate-50 gap-2"
                            >
                                <CheckCheck className="w-3.5 h-3.5" /> Mark all read
                            </Button>
                        )}
                        {notifications.total > 0 && (
                            <Button 
                                onClick={clearAll}
                                variant="ghost"
                                className="h-10 text-[10px] font-bold uppercase tracking-widest text-red-500 rounded-none hover:bg-red-50 gap-2"
                            >
                                <Trash2 className="w-3.5 h-3.5" /> Clear all
                            </Button>
                        )}
                    </div>
                </div>

                {/* Notifications List */}
                <div className="space-y-4">
                    {notifications.data.length > 0 ? (
                        <AnimatePresence mode="popLayout">
                            {notifications.data.map((notification) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className={`group relative bg-white border border-slate-200 border-l-4 rounded-sm p-6 transition-all hover:shadow-md ${getTypeColor(notification.data.type)} ${!notification.read_at ? 'ring-1 ring-brand-blue/10' : 'opacity-80'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            {getIcon(notification.data.type)}
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-4 mb-1">
                                                <h3 className={`font-bold text-sm ${!notification.read_at ? 'text-brand-navy' : 'text-slate-600'}`}>
                                                    {notification.data.title}
                                                </h3>
                                                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider">
                                                    <Clock className="w-3 h-3" />
                                                    {timeAgo(notification.created_at)}
                                                </span>
                                            </div>
                                            
                                            <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                                {notification.data.message}
                                            </p>

                                            <div className="flex items-center gap-4">
                                                {notification.data.action_url && (
                                                    <Link 
                                                        href={notification.data.action_url}
                                                        onClick={() => !notification.read_at && markAsRead(notification.id)}
                                                        className="text-[10px] font-black text-brand-blue uppercase tracking-widest hover:underline flex items-center gap-1"
                                                    >
                                                        View Details <Info className="w-3 h-3" />
                                                    </Link>
                                                )}
                                                {!notification.read_at && (
                                                    <button 
                                                        onClick={() => markAsRead(notification.id)}
                                                        className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-brand-blue transition-colors flex items-center gap-1"
                                                    >
                                                        Mark as read <Check className="w-3 h-3" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                onClick={() => deleteNotification(notification.id)}
                                                className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                                                title="Delete notification"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {!notification.read_at && (
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-brand-blue rounded-full -translate-x-2 translate-y-2 shadow-[0_0_8px_rgba(10,37,64,0.4)]" />
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    ) : (
                        <div className="bg-white border border-slate-200 rounded-sm p-20 text-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Bell className="w-10 h-10 text-slate-200" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy mb-2">No notifications yet</h3>
                            <p className="text-sm text-slate-400">We'll notify you when system activities occur.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {notifications.total > 15 && (
                    <div className="flex items-center justify-center gap-2 pt-4">
                        {notifications.links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url || '#'}
                                className={`px-4 py-2 text-xs font-bold transition-all rounded-none border ${link.active ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-white border-slate-200 text-slate-400 hover:border-brand-blue hover:text-brand-blue'} ${!link.url ? 'opacity-30 cursor-not-allowed' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

