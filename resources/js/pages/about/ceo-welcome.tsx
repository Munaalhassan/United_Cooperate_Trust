import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AboutSidebar } from '@/components/about-sidebar';

export default function CEOWelcome() {
    return (
        <PublicLayout>
            <Head title="CEO Welcome | United Cooperate Trust Bank" />

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
                        CEO welcome
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
                                alt="UCT Corporate Headquarters" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">A Word from our CEO</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                {[
                                    "Welcome to United Cooperate Trust Bank . We have always believed that private banking is a conversation that continues throughout our clients’ lives, as their circumstances and plans change. We want to get to know you well, to fully understand your needs and aspirations so that we can offer you tailored products and services. We hope that you will also take the time to get better acquainted with our bank and our diverse, international family of specialists. They are all passionate about their field and eager to apply their knowledge and experience to finding the best solutions for you.",
                                    "Today’s banking environment is evolving fast. Digitalisation, globalisation and increasing regulation present new opportunities and challenges every day. Our goal is to give you the independence and peace of mind to achieve your ambitions and prepare a secure future for yourself and your family.",
                                    "Since we started out, we have been driven by one mission: to provide our clients with an exclusive private banking experience. More than three decades later, our service philosophy has remained the same; we spare no effort to understand your needs and form a long-lasting relationship of trust with you.",
                                    "On behalf of everyone at United Cooperate Trust Bank , I thank you for the part you have played in our story so far and invite you to take a fresh look at what we have to offer. We are always here for you."
                                ].map((para, i) => (
                                    <motion.p 
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                    >
                                        {para}
                                    </motion.p>
                                ))}
                            </div>

                            {/* Signature Area */}
                            <div className="mt-16 pt-12 border-t border-slate-200">
                                <div className="text-xl font-bold text-brand-navy mb-1 italic font-serif">Larry Williams</div>
                                <div className="text-sm font-bold text-brand-blue uppercase tracking-widest">Chief Executive Officer</div>
                                <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">United Cooperate Trust Bank</div>
                            </div>
                        </div>
                    </motion.div>

                    <AboutSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
