import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CorporateBankingSidebar } from '@/components/corporate-banking-sidebar';

export default function CorporateFinancing() {
    return (
        <PublicLayout>
            <Head title="Corporate Financing | United Cooperate Trust Bank" />

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
                        Corporate Financing
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
                            <img 
                                src="/images/slider_lobby.png" 
                                alt="UCT Corporate Financing" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Corporate Financing through the Globafin Group</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Our Group offers various credit solutions to meet your cash requirements and investment plans.
                                </p>
                                <p>
                                    We have exclusive cooperation agreements with Globafin Group Business Centres and Large Corporate divisions in USA and south-eastern Europe.
                                </p>
                            </div>

                            {/* Financing Solutions */}
                            <div className="mb-20">
                                <h3 className="text-2xl font-bold text-brand-navy mb-10 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    Our Corporate Financing Solutions
                                </h3>
                                
                                <div className="bg-white border border-slate-100 p-8 shadow-sm">
                                    <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                                        {[
                                            "Short-term financing",
                                            "Long-term financing",
                                            "Overdraft facilities",
                                            "Term loans",
                                            "Bond Loans",
                                            "Investment loans",
                                            "Club deals",
                                            "Syndicated loans"
                                        ].map((solution, i) => (
                                            <div key={i} className="flex items-center gap-4 border-b border-slate-50 pb-4 last:border-0 sm:last:border-b sm:nth-last-child(-n+2):border-0">
                                                <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                                                    <ChevronRight className="w-4 h-4 text-brand-blue" />
                                                </div>
                                                <span className="text-slate-700 font-semibold">{solution}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <CorporateBankingSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
