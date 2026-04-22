import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { signup } from '@/routes/membership';

const sidebarLinks = [
    { name: 'E-Banking Registration', href: '/quick-services/e-banking-registration' },
    { name: 'Credit Cards', href: '/quick-services/credit-cards' },
    { name: 'Security Awareness', href: '/quick-services/security-awareness' },
    { name: 'Third-Party Payments', href: '/quick-services/third-party-payments' },
];

export function QuickServicesSidebar() {
    const { url } = usePage();

    return (
        <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-32">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                    Quick Services Menu
                </h3>

                {/* Classic Corporate Navigation */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-sm overflow-hidden">
                    <nav className="flex flex-col">
                        {sidebarLinks.map((link, idx) => {
                            const isActive = url.startsWith(link.href);
                            return (
                                <Link 
                                    key={idx}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center justify-between p-5 border-b border-slate-200/60 last:border-b-0 transition-all duration-200 group",
                                        isActive 
                                            ? "bg-white border-l-4 border-l-brand-blue" 
                                            : "bg-transparent border-l-4 border-l-transparent hover:bg-white"
                                    )}
                                >
                                    <span className={cn(
                                        "text-xs font-bold tracking-[0.1em] uppercase transition-colors",
                                        isActive ? "text-brand-navy" : "text-slate-500 group-hover:text-brand-navy"
                                    )}>
                                        {link.name}
                                    </span>
                                    <ChevronRight className={cn(
                                        "w-4 h-4 transition-transform", 
                                        isActive ? "text-brand-blue translate-x-1" : "text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1"
                                    )} />
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Corporate Info Card */}
                <div className="mt-8 p-6 bg-slate-50 border border-slate-200/60 rounded-sm">
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-[0.15em] mb-3">Client Security</h4>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed font-light">
                        We prioritize the confidentiality and security of your digital transactions.
                    </p>
                    <Link href="/quick-services/security-awareness" className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors uppercase tracking-widest">
                        Read Policy <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </aside>
    );
}
