import { PublicHeader } from '@/components/public-header';
import { ReactNode } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { CookieBanner } from '@/components/cookie-banner';
import { BackToTop } from '@/components/back-to-top';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SmoothScroll } from '@/components/smooth-scroll';

export default function PublicLayout({ children }: { children: ReactNode }) {
    const { scrollYProgress } = useScroll();

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-slate-50 font-sans antialiased">
            {/* Enhanced Scroll Progress Bar with Speedlighting Effect */}
            <div className="fixed top-0 left-0 right-0 h-1.5 z-[9999] pointer-events-none">
                <motion.div
                    className="h-full bg-brand-blue origin-left relative overflow-hidden shadow-[0_0_15px_rgba(0,122,255,0.6)]"
                    style={{ scaleX: scrollYProgress }}
                >
                    <motion.div 
                        className="absolute inset-0 h-full w-[200%]"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 75%, transparent 100%)',
                        }}
                        animate={{
                            x: ['-100%', '50%']
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </div>
            <PublicHeader />
            <main className="relative">
                {children}
            </main>
            {/* Footer will be added in a separate task */}
            <footer className="bg-brand-navy py-20 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    {/* Navigation Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
                        {/* Column 1: Our Bank */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
                                Our Bank
                            </h4>
                            <ul className="space-y-4">
                                <li><Link href="/about/our-bank" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">About Us</Link></li>
                                <li><Link href="/about/ceo-welcome" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">CEO Welcome</Link></li>
                                <li><Link href="/about/why-usa" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Why USA?</Link></li>
                                <li><Link href="/about/human-resources" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Human Resources</Link></li>
                                <li><Link href="/about/london-branch" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">London Branch</Link></li>
                            </ul>
                        </motion.div>

                        {/* Column 2: Private Banking */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 pb-3 border-b border-white/10">Private Banking</h4>
                            <ul className="space-y-4">
                                <li><Link href="/private-banking/investment-services" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Investment Services</Link></li>
                                <li><Link href="/private-banking/credit-solutions" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Credit Solutions</Link></li>
                                <li><Link href="/private-banking/family-office" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Family Office</Link></li>
                            </ul>
                        </motion.div>

                        {/* Column 3: Corporate Banking */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 pb-3 border-b border-white/10">Corporate Banking</h4>
                            <ul className="space-y-4">
                                <li><Link href="/corporate-banking/corporate-financing" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Corporate Financing</Link></li>
                                <li><Link href="/corporate-banking/trade-finance" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Trade Finance</Link></li>
                                <li><Link href="/corporate-banking/payment-fx" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Payment & FX</Link></li>
                                <li><Link href="/corporate-banking/business-cards" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Business Cards</Link></li>
                            </ul>
                        </motion.div>

                        {/* Column 4: Resources */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 pb-3 border-b border-white/10">Resources</h4>
                            <ul className="space-y-4">
                                <li><Link href="/media/news-events" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">News & Events</Link></li>
                                <li><Link href="/media/publications" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Publications</Link></li>
                                <li><Link href="/quick-services/security-awareness" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Security Awareness</Link></li>
                                <li><Link href="/quick-services/e-banking" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">E-Banking</Link></li>
                                <li><Link href="/contact" className="text-white/50 hover:text-brand-blue text-[15px] font-medium transition-all hover:pl-2">Contact Us</Link></li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center pt-16 border-t border-white/10"
                    >
                        {/* Footer Logo */}
                        <OptimizedImage 
                            src="/images/logo.png" 
                            alt="United Cooperate Bank" 
                            width={200}
                            height={56}
                            className="h-14 w-auto mb-12 grayscale brightness-0 invert opacity-40 cursor-pointer hover:opacity-100 transition-opacity duration-500" 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        />

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
                            {([
                                { label: 'Legal Disclaimer', href: '/legal/legal-disclaimer' },
                                { label: 'Complaints', href: '/legal/complaints' },
                                { label: 'Terms of Use', href: '/legal/terms-of-use' },
                                { label: 'Personal Data Notice', href: '/legal/personal-data-notice' },
                            ] as { label: string; href: string }[]).map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/40 text-[13px] font-medium hover:text-brand-blue transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-white/20 font-medium tracking-wide text-xs">
                            ©{new Date().getFullYear()} United Cooperate Trust Bank. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </footer>
            <CookieBanner />
            <BackToTop />
        </div>
        </SmoothScroll>
    );
}
