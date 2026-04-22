import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CorporateBankingSidebar } from '@/components/corporate-banking-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function TradeFinance() {
    return (
        <PublicLayout>
            <Head title="Trade Finance Services | United Cooperate Trust Bank" />

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
                        Trade Finance Services
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
                                alt="UCT Trade Finance" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Trade Finance Services</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    We leverage our Group's global network supported by experienced specialist teams with a long track record of reliable client service. We provide financial guarantees in a wide variety of situations, including payment guarantees for your business partners, performance bonds, refund guarantees on advance payments and customs guarantees.
                                </p>
                                <p>
                                    Our specialists have extensive experience in local and cross-border frameworks, meeting a full spectrum of import and export requirements and helping your business to grow internationally.
                                </p>
                            </div>

                            {/* Service Offerings */}
                            <div className="mb-20">
                                <h3 className="text-2xl font-bold text-brand-navy mb-10 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    We Offer
                                </h3>
                                
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { title: "Letters of Guarantee", desc: "Secure your domestic and international contractual obligations." },
                                        { title: "Letters of Credit", desc: "Facilitate global trade with trusted payment mechanisms." },
                                        { title: "Collection Services", desc: "Efficient handling of your import and export documentation." }
                                    ].map((service, i) => (
                                        <div key={i} className="bg-white border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all group">
                                            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                                                <div className="w-2 h-2 bg-brand-blue rounded-full group-hover:bg-white transition-colors" />
                                            </div>
                                            <h4 className="text-base font-bold text-brand-navy mb-3">{service.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                                        </div>
                                    ))}
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
