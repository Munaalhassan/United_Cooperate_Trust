import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PrivateBankingSidebar } from '@/components/private-banking-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function FamilyOffice() {
    return (
        <PublicLayout>
            <Head title="Family Office | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Private Banking</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Family Office
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
                                src="/images/slider_wealth.png" 
                                alt="UCT Family Office Services" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Wealth Management</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Our clients are traditionally concerned by three challenges regarding their wealth: <span className="font-bold text-brand-navy">Protection – Enhancement – Succession</span>. Our Family Office will assist you in structuring your wealth so that you and your family can make the most out of it.
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="space-y-12">
                                {[
                                    { 
                                        title: "Map your current structure", 
                                        desc: "You want to review your personal or corporate structure? We help you visualize your current structure in a simplified and legible way." 
                                    },
                                    { 
                                        title: "Set your objectives", 
                                        desc: "You contemplate a corporate reorganisation, your personal relocation or your succession planning? We help you determine and articulate a precise set of objectives." 
                                    },
                                    { 
                                        title: "Identify the pathways and design the optimal one", 
                                        desc: "The beginning of every reorganisation is full of question marks. Which jurisdiction? Which vehicle? Which legal instrument? What about regulation? What about reporting? We help you ask the right questions, define the structure that fits your needs and anticipate every detail before pulling the trigger." 
                                    },
                                    { 
                                        title: "Monitor implementation and lifetime", 
                                        desc: "We will coordinate with your legal and tax Relationship Officer, identify the right service provider in a specific field or jurisdiction, ensure efficient, timely and qualitative deliverable, monitor performance. We will be there to walk you and the project through." 
                                    }
                                ].map((step, i) => (
                                    <div key={i} className="relative pl-12 group">
                                        {/* Step Number Badge */}
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                            {i + 1}
                                        </div>
                                        <h4 className="text-xl font-bold text-brand-navy mb-4">{step.title}</h4>
                                        <p className="text-slate-600 font-light leading-relaxed text-base">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Summary Note */}
                            <div className="mt-20 p-12 bg-white border border-slate-200 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />
                                <p className="text-slate-700 font-medium leading-relaxed italic">
                                    "Our Family Office acts as the central hub for your global interests, ensuring that every element of your financial life is synchronized and protected."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <PrivateBankingSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
