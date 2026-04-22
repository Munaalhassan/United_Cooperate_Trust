import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PrivateBankingSidebar } from '@/components/private-banking-sidebar';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function CreditSolutions() {
    return (
        <PublicLayout>
            <Head title="Credit Solutions | United Cooperate Trust Bank" />

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
                        Credit Solutions
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
                                alt="UCT Credit Solutions" 
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Our Philosophy and approach to Credit</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-20">
                                <p>
                                    Lending is a key component of our private banking offering. It allows our clients to leverage their assets and take advantage of opportunities. Our flexible and balanced credit solutions are based on understanding your particular needs in the context of the prevailing market and economic conditions and outlook.
                                </p>
                                <p>
                                    Whether you need financing for a personal, family, investment or lifestyle project, your relationship officer will work together with an experienced team of credit specialists to develop the best solution.
                                </p>
                            </div>

                            {/* Main Products Grid */}
                            <div className="mb-20">
                                <h3 className="text-2xl font-bold text-brand-navy mb-12 flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-blue" />
                                    Our Main Products
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Lombard loans", desc: "Flexible credit facilities secured against your investment portfolio." },
                                        { title: "Real estate financing", desc: "Expert solutions for high-value residential and commercial property acquisitions." },
                                        { title: "Tailor-made solutions", desc: "Bespoke credit structures designed for complex multi-asset requirements." },
                                        { title: "Credit cards", desc: "Exclusive card solutions providing global liquidity and lifestyle benefits." }
                                    ].map((product, i) => (
                                        <div key={i} className="p-8 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group border-l-4 border-l-transparent hover:border-l-brand-blue">
                                            <h4 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">{product.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{product.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Advisory Card */}
                            <div className="p-10 bg-slate-100/50 border border-slate-200 rounded-sm italic text-slate-600 font-light">
                                "Our goal is to provide the liquidity you need while ensuring your long-term wealth strategy remains intact and secure."
                            </div>
                        </div>
                    </motion.div>

                    <PrivateBankingSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
