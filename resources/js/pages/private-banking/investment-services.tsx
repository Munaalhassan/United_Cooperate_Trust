import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PrivateBankingSidebar } from '@/components/private-banking-sidebar';

export default function InvestmentServices() {
    return (
        <PublicLayout>
            <Head title="Investment Services | United Cooperate Trust Bank" />

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
                        Investment Services
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
                                alt="UCT Investment Services" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Asset Management Mandate</h2>
                            
                            <div className="space-y-12 text-lg text-slate-600 leading-relaxed font-light mb-20">
                                <section>
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Our Philosophy and Investment Approach</h3>
                                    <div className="grid gap-8">
                                        {[
                                            { title: "Long-term results", text: "We focus on consistent performance over time and solutions that are aligned with each client’s investment profile." },
                                            { title: "Expertise", text: "Our solutions are designed and delivered by a team of experienced investment professionals with a strong record and a hands-on approach. To offer top-tier investment services, we draw from a broad range of in-house and third-party resources." },
                                            { title: "Open architecture", text: "By providing access to a vast universe of investment funds, we offer our clients an abundance of different products and strategies, management styles and asset managers to choose from." },
                                            { title: "Disciplined and process-based", text: "Using a balanced investment strategy that is frequently updated, along with a disciplined, risk-conscious approach, we strive to deliver optimal risk-return results and long-term value." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 p-6 bg-white border border-slate-100 shadow-sm hover:border-brand-blue/20 transition-colors">
                                                <div className="w-1 h-12 bg-brand-blue flex-shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-base font-bold text-brand-navy mb-2">{item.title}</h4>
                                                    <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">A Global Perspective</h3>
                                    <p className="mb-6">
                                        Our investment clients benefit from access to global markets and cutting-edge products. Our aim is to identify and take advantage of the continuous flow of opportunities stemming from the ever-changing global economic environment and market conditions.
                                    </p>
                                    <p>
                                        Besides equity, bonds, foreign exchange, commodities, structured products, money and derivatives, we offer access to alternative investment products and solutions, in step with the industry’s accelerating innovation.
                                    </p>
                                </section>

                                <section className="p-10 bg-brand-navy text-white rounded-sm">
                                    <h3 className="text-xl font-bold mb-8">Asset Management Mandates</h3>
                                    <p className="text-white/70 mb-8 text-sm">We offer three options to give you flexibility, control and peace of mind:</p>
                                    <ul className="space-y-4">
                                        {[
                                            "Discretionary Asset Management Mandate",
                                            "Investment Advisory Mandate",
                                            "Execution-only Mandate"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-brand-blue font-bold tracking-wide">
                                                <ChevronRight className="w-4 h-4" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-brand-navy mb-6">Sustainable Investing*</h3>
                                    <p className="mb-6">
                                        Sustainable investing is now a widely used strategy, adopted by both asset managers and investors, who aim at exploiting financial opportunities, having at the same time a positive impact on sustainable development. This development is achieved through investment vehicles which follow an environmental, social and governance-related (ESG) approach. This trend is evolving fast and new opportunities arize continuously.
                                    </p>
                                    <p className="mb-8">
                                        If you are thinking about how your personal wealth can have a positive impact on sustainability, we can work with you to create an investment strategy that aligns your sustainable investment objectives with your risk-return expectations.
                                    </p>
                                    <div className="text-brand-blue font-bold italic text-xl">
                                        You have the power to change the world with your investments!
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>

                    <PrivateBankingSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
