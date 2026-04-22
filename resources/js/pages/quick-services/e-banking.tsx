import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { QuickServicesSidebar } from '@/components/quick-services-sidebar';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Lock, RefreshCcw } from 'lucide-react';

export default function EBankingRegistration() {
    return (
        <PublicLayout>
            <Head title="E-Banking Registration | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Quick Services</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        E-Banking Registration
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
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Seamless Digital Banking</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-12">
                                <p>
                                    Welcome to United Cooperate Trust Bank E-Banking. Our secure, fast, and feature-rich digital banking platform puts you in control of your finances wherever you are in the world.
                                </p>
                                <p>
                                    Once approved, you will have immediate access to your accounts, transaction history, rapid fund transfers, and exclusive online financial tools.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-8 mb-16">
                                <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue group-hover:scale-110 transition-transform">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy">Bank-Grade Security</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Multi-factor authentication, end-to-end encryption, and real-time fraud monitoring keep your assets secure.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue group-hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy">Instant Transfers</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Move funds instantly between your accounts, execute local transfers, or manage international SWIFT transactions.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy">Total Control</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Manage limits, order new cards, update your details, or freeze your cards instantly from the platform.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue group-hover:scale-110 transition-transform">
                                        <RefreshCcw className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-navy">24/7 Availability</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Access your dashboard and execute commands at any time. Our digital doors are never closed to you.
                                    </p>
                                </div>
                            </div>

                            <hr className="border-slate-200 mb-16" />

                            <div className="bg-white shadow-xl rounded-sm overflow-hidden border border-slate-100 relative">
                                {/* Decorative accent */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-navy" />
                                
                                <div className="p-8 md:p-12 text-center">
                                    <div className="w-16 h-16 bg-brand-blue/10 flex items-center justify-center rounded-full text-brand-blue mx-auto mb-6">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-navy mb-4">Registration</h2>
                                    <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                                        To register to our E-Banking, please send a message to your Client Relationship Officer.
                                    </p>
                                    <div className="mt-8">
                                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold tracking-widest uppercase hover:bg-brand-blue transition-colors rounded-sm">
                                            Contact Us <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </PublicLayout>
    );
}
