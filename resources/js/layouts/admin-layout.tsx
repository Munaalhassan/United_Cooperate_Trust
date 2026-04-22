import React, { ReactNode } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    FileText, 
    ShieldCheck, 
    LogOut,
    Bell,
    TrendingUp,
    User,
    UserPlus
} from 'lucide-react';
import { dashboard, logout } from '@/routes/system/mgt';
import { index as navIndex } from '@/routes/system/mgt/nav-funds';
import { index as pubIndex } from '@/routes/system/mgt/publications';
import { index as memIndex } from '@/routes/system/mgt/memberships';
import { Toaster } from '@/components/ui/sonner';
import { useFlashToast } from '@/hooks/use-flash-toast';
import { useAsset } from '@/hooks/use-asset';
import { edit as profileEdit } from '@/routes/system/mgt/profile';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface Props {
    children: ReactNode;
    title: string;
}

export default function AdminLayout({ children, title }: Props) {
    const { url } = usePage();
    const { asset } = useAsset();
    useFlashToast();

    const isActive = (path: string) => url === path || url.startsWith(path + '/');

    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-sans">
            <Head title={`${title} | UCT Bank Admin`} />

            {/* Sidebar */}
            <aside className="w-64 bg-brand-navy text-white flex flex-col fixed inset-y-0 shadow-2xl z-40">
                <div className="p-8 border-b border-white/5">
                    <OptimizedImage 
                        src={asset('images/logo.png')} 
                        alt="UCT Bank Admin" 
                        width={120}
                        height={32}
                        priority={true}
                        className="h-8 w-auto brightness-0 invert" 
                    />
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3" /> System Admin
                    </div>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                    <Link 
                        href={dashboard.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/dashboard') ? 'bg-white/15 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}
                    >
                        <LayoutDashboard className={`w-4 h-4 ${isActive('/system-node-mgt/dashboard') ? 'text-brand-blue' : ''}`} /> Dashboard
                    </Link>
                    
                    <Link 
                        href={memIndex.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/memberships') ? 'bg-white/15 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}
                    >
                        <UserPlus className={`w-4 h-4 ${isActive('/system-node-mgt/memberships') ? 'text-brand-blue' : ''}`} /> Memberships
                    </Link>

                    <Link 
                        href={navIndex.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/nav-funds') ? 'bg-white/15 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}
                    >
                        <TrendingUp className={`w-4 h-4 ${isActive('/system-node-mgt/nav-funds') ? 'text-brand-blue' : ''}`} /> NAV Centre
                    </Link>

                    <Link 
                        href={pubIndex.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/publications') ? 'bg-white/15 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'}`}
                    >
                        <FileText className={`w-4 h-4 ${isActive('/system-node-mgt/publications') ? 'text-brand-blue' : ''}`} /> Publications
                    </Link>
                </nav>

                <div className="p-6 border-t border-white/5 space-y-1">
                    <Link 
                        href={profileEdit.url()} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm font-medium text-sm transition-all group ${isActive('/system-node-mgt/profile') ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <User className={`w-4 h-4 ${isActive('/system-node-mgt/profile') ? 'text-brand-blue' : ''}`} /> My Profile
                    </Link>

                    <Link 
                        href={logout.url()} 
                        method="post" 
                        as="button" 
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-all text-sm font-medium group"
                    >
                        <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Sign Out
                    </Link>

                    <div className="pt-4 mt-4 border-t border-white/5">
                        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest">
                            <ShieldCheck className="w-3 h-3" /> Public Site
                        </Link>
                    </div>
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
                        <Link 
                            href={profileEdit.url()}
                            className="flex items-center gap-3 pl-6 border-l border-slate-200 group"
                        >
                            <div className="text-right">
                                <div className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                                    {(usePage().props as any).auth?.admin?.name || 'Admin User'}
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Access</div>
                            </div>
                            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-brand-blue/10 group-hover:scale-105 transition-transform">
                                {((usePage().props as any).auth?.admin?.name?.charAt(0) || 'A').toUpperCase()}
                            </div>
                        </Link>
                    </div>
                </header>

                <div className="p-8 md:p-10">
                    {children}
                </div>
            </main>
            <Toaster />
        </div>
    );
}
