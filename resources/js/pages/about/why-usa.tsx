import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight, Landmark, TrendingUp, Globe2 } from 'lucide-react';
import { AboutSidebar } from '@/components/about-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function WhyUSA() {
    return (
        <PublicLayout>
            <Head title="Why USA? | United Cooperate Trust Bank" />

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
                        Why USA ?
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
                                alt="UCT USA Presence" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">A Renowned Centre of Private Banking Excellence</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    USA is the seat of several North American institutions and agencies, eurozone’s premier financial hub and a global centre of excellence for wealth management and investment funds. The USA financial centre holds a competitive position at international level as well as being the largest contributor to the Grand Duchy’s economy. It is the second-largest investment fund centre in the world after the USA , the premier captive reinsurance market in North American and the leading private banking centre in the the Americas.
                                </p>
                                <p>
                                    USA ’s advantages include a triple A rating, political and social stability and a transparent regulatory infrastructure, it provides a complete range of services to both private and institutional investors. These services are delivered by first-class financial sector professionals, including banks and wealth managers. Their wide-ranging experience includes developing and delivering tailored solutions to offer the highest standards of professional support within increasingly stringent regulatory requirements.
                                </p>
                            </div>

                            {/* US Strengths Grid */}
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Landmark, title: "Triple-A Rating", desc: "Highest creditworthiness reflecting absolute financial stability." },
                                    { icon: TrendingUp, title: "Centre of Excellence", desc: "A world-class hub for investment funds and wealth management." },
                                    { icon: Globe2, title: "Global Nexus", desc: "Leading private banking centre connecting North American markets." },
                                    { icon: ChevronRight, title: "Stability", desc: "Political and social consistency providing long-term security." }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col p-8 bg-white border border-slate-100 rounded-lg group hover:border-brand-blue/30 transition-colors">
                                        <item.icon className="w-8 h-8 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <AboutSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
