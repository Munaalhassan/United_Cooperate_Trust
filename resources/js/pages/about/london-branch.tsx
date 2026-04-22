import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { AboutSidebar } from '@/components/about-sidebar';

export default function LondonBranch() {
    return (
        <PublicLayout>
            <Head title="Our London Branch | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600">About us</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Our London branch
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
                                src="/images/london_skyline.png" 
                                alt="UCT London Branch" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">A Truly International Approach</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    We acquired our London branch in 2015 to enhance our product offering with the advantages of a global financial centre and a leading real estate market. The branch provides services to high net worth individuals and clients of the Globafin Group who live, work or have assets in the UK. We also serve family offices, funds and other institutional clients (usually linked to high net worth individuals) and corporations using London as a hub for international transactions.
                                </p>
                                <p>
                                    Our London team brings a long experience in structuring financing solutions for investment acquisitions for UK and EU (non-UK) properties as well as financing solutions for yachts and investment portfolios. Our capabilities can support existing or new Private Banking asset management relationships.
                                </p>
                            </div>

                            {/* Comprehensive Services */}
                            <div className="mb-20">
                                <h3 className="text-2xl font-bold text-brand-navy mb-10 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    Comprehensive Services
                                </h3>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest border-b border-slate-200 pb-2">Individual Banking</h4>
                                        <ul className="space-y-3 text-slate-600 text-sm font-light">
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full" /> Private banking (via the USA bank)</li>
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full" /> Transactional and lending services</li>
                                        </ul>
                                        
                                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest border-b border-slate-200 pb-2 mt-10">Corporate Banking</h4>
                                        <ul className="space-y-3 text-slate-600 text-sm font-light">
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full" /> Deposits & Transactional services</li>
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-blue rounded-full" /> Letters of Guarantees / Letters of Credit</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest border-b border-slate-200 pb-2">Credit Services</h4>
                                        <ul className="space-y-3 text-slate-600 text-sm font-light">
                                            <li className="font-bold text-slate-800">London investment property:</li>
                                            <li className="pl-4">Residential property (Buy-To-Let)</li>
                                            <li className="pl-4">Residential development financing</li>
                                            <li className="pl-4">Commercial property financing</li>
                                            <li className="font-bold text-slate-800 mt-4">Via the Luxembourg bank:</li>
                                            <li className="pl-4">EU (non-UK) property</li>
                                            <li className="pl-4">Yacht financing</li>
                                            <li className="pl-4">Lombard loans</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Preparing the Future */}
                            <div className="p-10 bg-white border border-slate-200 shadow-sm mb-16">
                                <h3 className="text-xl font-bold text-brand-navy mb-6">Preparing the Future</h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    As the banking sector prepares for the UK’s departure from the EU, our London branch will play an increasingly important role in ensuring effective cross-border cooperation and communication. Our presence in both the UK and USA will help to ensure a stable, seamless service for all our clients as the international banking industry evolves.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <AboutSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
