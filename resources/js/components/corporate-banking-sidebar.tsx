import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const sidebarLinks = [
    { name: 'Payment and FX services', href: '/corporate-banking/payment-fx' },
    { name: 'Trade Finance Services', href: '/corporate-banking/trade-finance' },
    { name: 'Business Credit Cards', href: '/corporate-banking/business-cards' },
    { name: 'Corporate Financing', href: '/corporate-banking/corporate-financing' },
];

export function CorporateBankingSidebar() {
    const { url } = usePage();

    return (
        <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-32">
                <h3 className="text-sm font-bold text-brand-blue uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                    <div className="w-8 h-px bg-brand-blue" />
                    Corporate Banking
                </h3>

                {/* Timeline Navigation */}
                <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200" />
                    
                    <nav className="flex flex-col gap-10">
                        {sidebarLinks.map((link, idx) => {
                            const isActive = url === link.href;
                            return (
                                <Link 
                                    key={idx}
                                    href={link.href}
                                    className="group relative flex items-start"
                                >
                                    {/* Dot on line */}
                                    <div className={cn(
                                        "absolute -left-[37.5px] top-1 w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 bg-white",
                                        isActive ? "border-brand-blue scale-125 shadow-[0_0_10px_rgba(0,102,255,0.2)]" : "border-slate-300 group-hover:border-brand-blue"
                                    )} />
                                    
                                    <span className={cn(
                                        "text-sm font-bold uppercase tracking-widest transition-colors leading-none pt-1",
                                        isActive ? "text-brand-blue" : "text-slate-400 group-hover:text-brand-navy"
                                    )}>
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Need Help Card */}
                <div className="mt-20 p-8 bg-brand-navy text-white overflow-hidden relative group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    <h4 className="text-lg font-bold mb-4 relative z-10">Corporate Support</h4>
                    <p className="text-xs text-white/60 mb-6 relative z-10 leading-relaxed">
                        Dedicated solutions for your business ambitions. Our specialists are here to help you scale globally.
                    </p>
                    <Link href="/contact" className="text-xs font-bold text-brand-blue hover:text-white transition-colors relative z-10 flex items-center gap-2">
                        TALK TO AN EXPERT <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </aside>
    );
}
