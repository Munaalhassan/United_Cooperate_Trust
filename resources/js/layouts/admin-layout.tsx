import React, { ReactNode } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    Users, 
    FileText, 
    Settings, 
    ShieldCheck, 
    LogOut,
    Bell,
    TrendingUp
} from 'lucide-react';
import { dashboard } from '@/routes/system/mgt';
import { index } from '@/routes/system/mgt/nav-funds';

interface Props {
    children: ReactNode;
    title: string;
}

export default function AdminLayout({ children, title }: Props) {
    const { url } = usePage();

    const isActive = (path: string) => url.startsWith(path);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-sans">
            <Head title={`${title} | UCT Bank Admin`} />

            {/* Sidebar */}
            <aside className="w-64 bg-brand-navy text-white flex flex-col fixed inset-y-0 shadow-2xl z-40">
                <div className="p-8 border-b border-white/5">
                    <img 
                        src="/images/logo.png" 
                        alt="UCT Bank Admin" 
                        className="h-8 w-auto brightness-0 invert" 
                    />
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3" /> System Admin
                    </div>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                    <Link 
                        href={dashboard.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/dashboard') ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <LayoutDashboard className={`w-4 h-4 ${isActive('/system-node-mgt/dashboard') ? 'text-brand-blue' : ''}`} /> Dashboard
                    </Link>
                    
                    <Link 
                        href={index.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/nav-funds') ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <TrendingUp className={`w-4 h-4 ${isActive('/system-node-mgt/nav-funds') ? 'text-brand-blue' : ''}`} /> NAV Centre
                    </Link>

                    <Link 
                        href="#" 
                        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-sm font-medium text-sm transition-all group"
                    >
                        <Users className="w-4 h-4" /> User Management
                    </Link>

                    <Link 
                        href="#" 
                        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-sm font-medium text-sm transition-all group"
                    >
                        <FileText className="w-4 h-4" /> Content Management
                    </Link>

                    <Link 
                        href="#" 
                        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-sm font-medium text-sm transition-all group"
                    >
                        <Settings className="w-4 h-4" /> Global Settings
                    </Link>
                </nav>

                <div className="p-6 border-t border-white/5">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all text-sm font-medium">
                        <LogOut className="w-4 h-4" /> Back to Website
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 flex flex-col min-h-screen">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
                    <h1 className="text-xl font-bold text-brand-navy">{title}</h1>
                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-brand-navy transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right">
                                <div className="text-sm font-bold text-brand-navy">Admin User</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Access</div>
                            </div>
                            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                                AU
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 md:p-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
