import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { QuickServicesSidebar } from '@/components/quick-services-sidebar';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Download, User, Landmark, Building2, ShieldCheck, Info } from 'lucide-react';

export default function EBankingRegistration() {
    const downloadForm = (formName: string) => {
        // Mock download functionality
        alert(`Downloading ${formName}...`);
    };

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
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Registration Process</h2>
                            
                            <div className="bg-white p-8 border border-slate-200 shadow-sm mb-12 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue" />
                                <div className="flex gap-4">
                                    <Info className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                                        To register to our E-Banking, please print, fill in and sign the relevant form(s) below and send it to your Client Relationship Officer.
                                    </p>
                                </div>
                            </div>

                            {/* Forms Section */}
                            <div className="space-y-12">
                                {/* Natural Person */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <User className="w-5 h-5 text-brand-blue" />
                                        <h3 className="text-xl font-bold text-brand-navy uppercase tracking-widest">Natural Person</h3>
                                    </div>
                                    <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                                        <button onClick={() => downloadForm('Natural Person Application Form')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <FileText className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                                                <span className="text-sm font-medium text-slate-600">Application form</span>
                                            </div>
                                            <Download className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-transform group-hover:translate-y-0.5" />
                                        </button>
                                    </div>
                                </section>

                                {/* Legal Entities */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Building2 className="w-5 h-5 text-brand-blue" />
                                        <h3 className="text-xl font-bold text-brand-navy uppercase tracking-widest">Legal Entities</h3>
                                    </div>
                                    <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                                        <button onClick={() => downloadForm('Legal Entities Application Form')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <FileText className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                                                <span className="text-sm font-medium text-slate-600">Application form</span>
                                            </div>
                                            <Download className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-transform group-hover:translate-y-0.5" />
                                        </button>
                                        <button onClick={() => downloadForm('BoD Resolutions Template')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <FileText className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                                                <span className="text-sm font-medium text-slate-600">BoD Resolutions template</span>
                                            </div>
                                            <Download className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-transform group-hover:translate-y-0.5" />
                                        </button>
                                    </div>
                                </section>

                                {/* Funds */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Landmark className="w-5 h-5 text-brand-blue" />
                                        <h3 className="text-xl font-bold text-brand-navy uppercase tracking-widest">Funds</h3>
                                    </div>
                                    <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                                        <button onClick={() => downloadForm('Funds Application Form')} className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <FileText className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                                                <span className="text-sm font-medium text-slate-600">Application form</span>
                                            </div>
                                            <Download className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-transform group-hover:translate-y-0.5" />
                                        </button>
                                    </div>
                                </section>

                                {/* Specific Conditions */}
                                <section className="pt-8">
                                    <div className="bg-brand-navy p-8 text-white relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                                            <div className="flex gap-4">
                                                <ShieldCheck className="w-10 h-10 text-brand-blue shrink-0" />
                                                <div>
                                                    <h3 className="text-xl font-bold mb-2">E-Banking Specific Conditions</h3>
                                                    <p className="text-slate-400 text-sm">(applicable for all)</p>
                                                </div>
                                            </div>
                                            <button onClick={() => downloadForm('E-Banking Specific Conditions')} className="px-8 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-navy transition-all flex items-center gap-2">
                                                Download Now <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="mt-20 p-8 border border-slate-200 bg-slate-100/50 text-center">
                                <p className="text-sm text-slate-500 font-medium">
                                    Need assistance with your application? Our support team is here to help.
                                </p>
                                <div className="mt-4">
                                    <Link href="/contact" className="text-brand-blue font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">
                                        Contact Support Centre &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </PublicLayout>
    );
}
