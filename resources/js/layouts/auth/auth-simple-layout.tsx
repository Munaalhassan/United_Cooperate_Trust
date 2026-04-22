import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans p-6 sm:p-12">
            
            {/* Back to Home Link (Screen Top Left) */}
            <div className="fixed top-6 left-6 z-50">
                <Link 
                    href={home()} 
                    className="flex items-center gap-2 text-slate-400 hover:text-brand-navy text-[11px] font-bold uppercase tracking-[0.2em] transition-all group px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm"
                >
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> 
                    Website
                </Link>
            </div>

            {/* Header Logo */}
            <div className="w-full flex flex-col items-center justify-center mb-8">
                <Link href={home()} className="flex items-center gap-3">
                    <img 
                        src="/images/logo.png" 
                        alt="United Cooperate Trust Bank" 
                        className="h-12 w-auto drop-shadow-sm" 
                    />
                </Link>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mt-4">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" /> Secure Connection
                </div>
            </div>

            {/* Form Container */}
            <div className="w-full max-w-xl bg-white p-8 lg:p-10 shadow-xl rounded-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />
                
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-brand-navy mb-2 tracking-tight">{title}</h1>
                    <p className="text-slate-500 text-sm">
                        {description}
                    </p>
                </div>

                <div className="w-full">
                    {children}
                </div>
            </div>
            
            <div className="mt-8 text-xs text-slate-400 font-light tracking-wide text-center">
                &copy; {new Date().getFullYear()} United Cooperate Trust Bank. All rights reserved.
            </div>
        </div>
    );
}
