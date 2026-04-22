import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FundServicesSidebar } from '@/components/fund-services-sidebar';

export default function FundBusiness() {
    return (
        <PublicLayout>
            <Head title="Fund Business | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Fund Services</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Fund Business
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
                                src="/images/slider_wealth.png" 
                                alt="UCT Fund Business" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Tailored Institutional Support</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Our focus is on providing a customized and superior quality service to our clients based on long term relationships and a team with extensive experience and expertise.
                                </p>
                            </div>

                            {/* Placeholder for incoming text */}
                            <div className="p-12 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400 italic">
                                Content update pending...
                            </div>
                        </div>
                    </motion.div>

                    <FundServicesSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
