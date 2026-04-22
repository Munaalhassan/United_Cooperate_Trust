import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight, Shield, Target, Users } from 'lucide-react';
import { AboutSidebar } from '@/components/about-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function OurBank() {
    return (
        <PublicLayout>
            <Head title="Our Bank | United Cooperate Trust Bank" />

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
                        Our Bank
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
                                alt="UCT Heritage" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">A Personal Approach</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-20">
                                <p>
                                    Private banking is a conversation that continues throughout our client's life. As your circumstances, ambitions and prospects change, so do your banking needs. We take an open and global approach with customised products and services delivered by a team of experienced professionals from 13 different countries. United by a focused business model, they offer you transparency, expertise and independence.
                                </p>
                            </div>

                            {/* Strong Core Values */}
                            <div className="mb-24">
                                <h3 className="text-2xl font-bold text-brand-navy mb-12 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    Strong Core Values
                                </h3>
                                <div className="space-y-12">
                                    {[
                                        { 
                                            title: "Strive for Excellence", 
                                            text: "The bank's growth is driven by our experienced professionals, unmatched client service and continuous investment in technology. We strive to build coherent teams with market-leading skills and knowledge that add genuine value for our clients. The ability to constantly adapt allows us to better respond to our clients' changing needs, providing them with solutions needed to effectively understand their aspirations and plan their goals." 
                                        },
                                        { 
                                            title: "Passion and Innovation", 
                                            text: "Our passion for what we do drives us to constantly innovate and take on new challenges. We take an approach that crosses borders, cultures and traditional business units and we foster creativity and innovation to meet new needs as they evolve. Innovation is the manifestation of our expertise, our collaborative qualities, our passion and our determination to reinvent tomorrow's assessments." 
                                        },
                                        { 
                                            title: "Transparency and Trust", 
                                            text: "Transparency breeds trust, and trust is the foundation of our great teamwork. We have established open communication channels and operate within clear frameworks, ensuring that our clients, shareholders, partners and staff have access to relevant and up-to- date information at all times." 
                                        }
                                    ].map((value, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="group"
                                        >
                                            <h4 className="text-xl font-bold text-brand-blue mb-4 group-hover:translate-x-2 transition-transform duration-300">{value.title}</h4>
                                            <p className="text-slate-600 leading-relaxed font-light">{value.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Our History */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-brand-navy mb-12 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    Our History
                                </h3>
                                <p className="text-slate-600 mb-12 italic">
                                    Since the beginning, United Cooperate Trust Bank (the "bank") has been driven by one mission: to provide its clients with outstanding private banking services.
                                </p>
                                
                                <div className="relative border-l border-slate-200 ml-4 space-y-12">
                                    {[
                                        { year: "1986", text: "Our story begins when Banque de Dépôts, a Geneva based bank originally founded by the Onassis Family and acquired in 1980 by the Latsis Family, establishes a subsidiary in USA ." },
                                        { year: "1994", text: "Globafin Group acquires 75% of the equity share capital of Banque de Dépôts de USA and begins to gradually increase its share." },
                                        { year: "2005", text: "Globafin Group acquires 100% of the bank’s equity. The bank enjoys continuous growth due to its dynamism and strong relationships with clients." },
                                        { year: "2009", text: "The bank inaugurates its Representative Office in Rotterdam." },
                                        { year: "2012", text: "The bank changes its name to United Cooperate Trust Bank ." },
                                        { year: "2015", text: "The bank expands its global reach by opening a branch in London, a global financial centre and leading real estate market." }
                                    ].map((milestone, i) => (
                                        <div key={i} className="relative pl-10">
                                            <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-brand-blue ring-4 ring-white" />
                                            <div className="text-lg font-bold text-brand-blue mb-2">{milestone.year}</div>
                                            <p className="text-slate-600 leading-relaxed text-sm font-light">{milestone.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <AboutSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
