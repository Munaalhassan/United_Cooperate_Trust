import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CorporateBankingSidebar } from '@/components/corporate-banking-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function PaymentFX() {
    return (
        <PublicLayout>
            <Head title="Payment and FX Services | United Cooperate Trust Bank" />

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
                        Payment and FX services
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
                                alt="UCT Corporate Banking" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Payment and FX Services</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Our corporate payment services are designed to streamline processes, minimise your workload and save time and costs for your business. They include a specially designed payments system incorporating numerous monitoring, approval and security mechanisms. Our officers are always there for you, to give you the dedicated attention you would expect from a boutique bank.
                                </p>
                                <p>
                                    Our fast and secure FX services encompass transactions in spot, forward, options, and other treasury products involving currencies. They provide your business with liquidity, currency risk mitigation and access to international markets.
                                </p>
                            </div>

                            {/* Service Highlights */}
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                <div className="p-8 bg-white border border-slate-100 shadow-sm border-t-4 border-t-brand-blue">
                                    <h3 className="text-xl font-bold text-brand-navy mb-4">Corporate Payments</h3>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                                            <span>Streamlined processes to minimise workload</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                                            <span>Advanced monitoring and approval systems</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                                            <span>Enhanced security mechanisms</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="p-8 bg-white border border-slate-100 shadow-sm border-t-4 border-t-brand-blue">
                                    <h3 className="text-xl font-bold text-brand-navy mb-4">FX & Treasury</h3>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                                            <span>Spot, forward, and options transactions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                                            <span>Currency risk mitigation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                                            <span>Access to international markets liquidity</span>
                                        </li>
                                    </ul>
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
