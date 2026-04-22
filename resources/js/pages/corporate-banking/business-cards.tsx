import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CorporateBankingSidebar } from '@/components/corporate-banking-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function BusinessCards() {
    return (
        <PublicLayout>
            <Head title="Business Credit Cards | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Corporate Banking</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Business Credit Cards
                    </motion.h1>
                    <div className="w-24 h-1 bg-brand-blue mt-8" />
                </div>
            </div>

            {/* Main Content Split */}
            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-20">
                    
                    {/* Left Column - Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1"
                    >
                        {/* Featured Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 mb-16 shadow-2xl group">
                            <OptimizedImage 
                                src="/images/slider_lobby.png" 
                                alt="UCT Business Cards" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Business Credit Cards</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Our credit card solutions for businesses enable you to offer your employees exclusive banking benefits.
                                </p>
                                <p>
                                    They eliminate time-consuming accounting procedures and help you to control company expenses more efficiently.
                                </p>
                            </div>

                            {/* Card Showcase */}
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-brand-navy mb-10 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    The Right Credit Card for You
                                </h3>
                                
                                <div className="bg-white border border-slate-100 shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="w-full md:w-1/2 flex justify-center">
                                        {/* CSS Recreated Omnium Card */}
                                        <div 
                                            className="w-full max-w-[320px] aspect-[1.586/1] rounded-xl shadow-2xl relative overflow-hidden flex flex-col justify-between p-6"
                                            style={{ background: 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)' }}
                                        >
                                            <div className="flex justify-between items-start relative z-10">
                                                <div className="text-white/90 font-serif text-2xl tracking-widest drop-shadow-md">Omnium</div>
                                                <div className="w-12 h-8 bg-slate-300/60 rounded-md border border-white/20 shadow-inner" /> {/* Chip */}
                                            </div>
                                            <div className="space-y-4 relative z-10">
                                                <div className="text-white font-mono text-xl tracking-widest drop-shadow-md">5412 7512 3412 3456</div>
                                                <div className="flex justify-between items-end">
                                                    <div className="text-white/90 font-mono text-[10px] uppercase tracking-widest leading-relaxed drop-shadow-md">
                                                        LEE M. CARDHOLDER<br/>ANY COMPANY, INC.
                                                    </div>
                                                    
                                                    {/* Mastercard Logo CSS */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="flex -space-x-3 mb-1">
                                                            <div className="w-8 h-8 rounded-full bg-red-600/90 mix-blend-multiply" />
                                                            <div className="w-8 h-8 rounded-full bg-orange-500/90 mix-blend-multiply" />
                                                        </div>
                                                        <div className="text-white/90 font-bold italic text-[9px] tracking-wider">Mastercard</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Decorative circles */}
                                            <div className="absolute -right-12 -bottom-12 w-48 h-48 border-[24px] border-slate-800/10 rounded-full" />
                                            <div className="absolute top-4 left-1/4 w-12 h-12 border-[3px] border-slate-800/10 rounded-full" />
                                            <div className="absolute bottom-1/3 left-8 w-6 h-6 border-[2px] border-slate-800/10 rounded-full" />
                                        </div>
                                    </div>

                                    
                                    <div className="w-full md:w-1/2 space-y-6">
                                        <div>
                                            <h4 className="text-2xl font-bold text-brand-navy mb-2">Mastercard Business</h4>
                                            <p className="text-brand-blue font-semibold uppercase tracking-widest text-sm">Corporate Credit Card</p>
                                        </div>
                                        
                                        <ul className="space-y-4 text-slate-600">
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue font-bold">€</div>
                                                <span>Billing in EUR</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                                    <ChevronRight className="w-4 h-4 text-brand-blue" />
                                                </div>
                                                <span>VAT reclaim services are available</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Advisory Note */}
                            <div className="p-8 bg-brand-navy text-center rounded-sm">
                                <p className="text-white font-light tracking-wide">
                                    Your Relationship Officer is there to discuss your credit card needs.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <CorporateBankingSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
