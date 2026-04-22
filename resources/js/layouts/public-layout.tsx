import { PublicHeader } from '@/components/public-header';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
                            {['Legal Disclaimer', 'Complaints', 'Terms of Use', 'Personal Data Notice'].map((link) => (
                                <a 
                                    key={link}
                                    href="#" 
                                    className="text-white text-lg font-medium hover:text-brand-blue transition-all duration-300 border-b border-white/30 hover:border-brand-blue pb-1"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-white/40 font-medium tracking-wide text-sm">
                            ©2023 United Cooperate Trust Bank . All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}
