import { PublicHeader } from '@/components/public-header';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { CookieBanner } from '@/components/cookie-banner';

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased">
            <PublicHeader />
            <main className="relative">
                {children}
            </main>
            {/* Footer will be added in a separate task */}
            <footer className="bg-brand-navy py-20 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Footer Logo */}
                        <img 
                            src="/images/logo.png" 
                            alt="United Cooperate Bank" 
                            className="h-20 w-auto mb-16 grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer" 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        />

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
                            {([
                                { label: 'Legal Disclaimer', href: '/legal/legal-disclaimer' },
                                { label: 'Complaints', href: '/legal/complaints' },
                                { label: 'Terms of Use', href: '/legal/terms-of-use' },
                                { label: 'Personal Data Notice', href: '/legal/personal-data-notice' },
                            ] as { label: string; href: string }[]).map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white text-lg font-medium hover:text-brand-blue transition-all duration-300 border-b border-white/30 hover:border-brand-blue pb-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-white/40 font-medium tracking-wide text-sm">
                            ©{new Date().getFullYear()} United Cooperate Trust Bank. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </footer>
            <CookieBanner />
        </div>
    );
}
