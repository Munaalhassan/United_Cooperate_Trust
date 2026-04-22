import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight, Scale, FileText, Gavel } from 'lucide-react';
import { AboutSidebar } from '@/components/about-sidebar';

export default function Governance() {
    return (
        <PublicLayout>
            <Head title="Governance | United Cooperate Trust Bank" />

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
                        Governance
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
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Commitment to Excellence</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    Ethical conduct is of paramount importance at United Cooperate Trust Bank . We were one of the first banks in USA to sign the ICMA Private Banking Wealth Management Charter of Quality. In doing so, we pledged our commitment to the three main principles on which the charter is founded: integrity, transparency and professionalism.
                                </p>
                                <p>
                                    Our governance bodies and practices comply with the strictest requirements of the European Union and the European legislative and regulatory framework.
                                </p>
                            </div>

                            {/* Governance Sections */}
                            <div className="space-y-16">
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-10 bg-white border border-slate-100 shadow-sm"
                                >
                                    <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                                        <Scale className="w-6 h-6 text-brand-blue" />
                                        Board of Directors and Authorised Management
                                    </h3>
                                    <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                                        <p>
                                            The Board of Directors has overall responsibility for the bank. It ensures business continuity, oversees management and protects the long-term interests of clients, employees and shareholders.
                                        </p>
                                        <p>
                                            Authorised Management executes day-to- day business according to the strategies and guiding principles laid down by the Board of Directors. They ensure compliance with the relevant regulatory frameworks and safeguard the bank’s solvency, liquidity and long-term financial interests.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Compliance Framework Shorthand */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { icon: FileText, title: "Charter of Quality", text: "Committed to integrity, transparency and professionalism in wealth management." },
                                        { icon: Gavel, title: "Regulatory Oversight", text: "Compliant with EU and international legislative and regulatory frameworks." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 bg-slate-100/50 border border-slate-200">
                                            <item.icon className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                            <div>
                                                <h4 className="text-sm font-bold text-brand-navy mb-2">{item.title}</h4>
                                                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                                            </div>
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
