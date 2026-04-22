import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { QuickServicesSidebar } from '@/components/quick-services-sidebar';
import { motion } from 'framer-motion';
import { ChevronRight, ServerCog } from 'lucide-react';

export default function ThirdPartyPayments() {
    return (
        <PublicLayout>
            <Head title="Third-Party Payment Services | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/quick-services/e-banking-registration" className="hover:text-brand-blue transition-colors">Quick Services</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Third-Party Payments</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Third-Party Payment Services
                    </motion.h1>
                    <div className="w-24 h-1 bg-brand-blue mt-8" />
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
                    
                    {/* Sidebar */}
                    <QuickServicesSidebar />

                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1"
                    >
                        <div className="max-w-3xl">
                            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-slate-100 relative overflow-hidden">
                                {/* Decorative accent */}
                                <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue" />
                                
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue">
                                        <ServerCog className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-navy">Introduction</h2>
                                </div>
                                
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                    <p>
                                        In accordance with the provisions of the Revised Payment Services Directive (PSD2), United Cooperate Trust Bank (hereafter referred to as “United Cooperate Trust Bank”) will grant access to Third Party Providers (hereafter referred to as TPPs) to client accounts if they have received the client consent.
                                    </p>
                                    <p>
                                        In that context, United Cooperate Trust Bank has implemented LUXHUB's API solution.
                                    </p>
                                </div>
                                
                                {/* Additional Info Card (Optional but looks good for banking) */}
                                <div className="mt-12 bg-slate-50 p-6 rounded-sm border border-slate-200">
                                    <h3 className="text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">Security & Compliance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our implementation ensures that all third-party access is securely managed, logged, and strictly adheres to PSD2 regulatory standards. Your consent is always required before any data is shared.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </PublicLayout>
    );
}
