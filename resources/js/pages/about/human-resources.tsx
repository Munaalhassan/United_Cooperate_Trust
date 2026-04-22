import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { AboutSidebar } from '@/components/about-sidebar';
import { Button } from '@/components/ui/button';

export default function HumanResources() {
    return (
        <PublicLayout>
            <Head title="Human Resources | United Cooperate Trust Bank" />

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
                        Human Resources
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
                                alt="UCT Culture" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Working at United Cooperate Trust Bank</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Strive for excellence is one of the core values of our bank. We build coherent teams with market-leading skills and knowledge that add genuine value for our clients and shareholders.
                                </p>
                                <p>
                                    The people who work at our bank are our most precious resource and our future. We have a responsibility to provide them with a nurturing and stimulating environment where they can develop their personal and professional potential. For experienced professionals, we offer a fresh start, a chance to apply their knowledge in a different environment and new, shared pathways towards their ambitions. Because we only employ the best, our younger graduate employees have an opportunity to build valuable networks and learn from the financial sector’s leading experts.
                                </p>
                            </div>

                            {/* Respect and Diversity */}
                            <div className="mb-20 p-10 bg-white border border-slate-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                                    <Heart className="w-6 h-6 text-brand-blue" />
                                    Respect and Diversity
                                </h3>
                                <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                                    <p>
                                        Diverse staff is one of our vital assets. Our team is multicultural, multilingual and open-minded. We employ highly qualified individuals who are eager to participate in the many opportunities for training, mentorship and skill-building that we offer.
                                    </p>
                                    <p>
                                        Relationships are the foundation of our business, and we treat our employees with the same dedication, respect, personalised approach and access to knowledge as our clients and partners.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="p-12 bg-brand-blue text-white rounded-sm text-center">
                                <h3 className="text-2xl font-bold mb-4">Interested in Joining Us?</h3>
                                <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
                                    We are always looking for talented and motivated team members. We look forward to hearing from you!
                                </p>
                                <Button className="bg-white text-brand-blue hover:bg-brand-navy hover:text-white font-bold px-10 py-6 rounded-none uppercase tracking-widest text-xs transition-colors">
                                    View Vacancies
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    <AboutSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
