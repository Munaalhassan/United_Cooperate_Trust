import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <PublicLayout>
            <Head title="Contact Us | United Cooperate Trust Bank" />

            {/* Header */}
            <div className="bg-brand-navy relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white font-bold">Contact Us</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
                    >
                        Contact us
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
                    >
                        Our Relationship Officers can help you to plan for your goals, reach your targets and prepare a secure future for yourself and your family. Why not get in touch to find out about our exclusive service?
                    </motion.p>
                </div>
            </div>

            {/* Main Content - Premium Directory Layout */}
            <div className="bg-slate-50 min-h-screen py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden border border-slate-200/50 w-full"
                    >
                        
                        {/* Dark Left Side - Main Office */}
                        <div className="lg:w-5/12 bg-brand-navy p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white shrink-0 min-w-0">
                            {/* Abstract overlay */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-1 bg-brand-blue mb-12" />
                                <h3 className="text-xs tracking-[0.3em] uppercase text-brand-blue mb-4 font-bold">Customer Service</h3>
                                <h2 className="text-3xl lg:text-4xl font-light mb-12 tracking-tight">Main Office</h2>
                                
                                <div className="flex items-start gap-4 lg:gap-6">
                                    <MapPin className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                                    <p className="text-lg lg:text-xl leading-relaxed font-light text-slate-200 break-words">
                                        1256 - Butantã,<br />
                                        São Paulo - SP,<br />
                                        05503-000,<br />
                                        Germany
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 mt-16 lg:mt-24">
                                <div className="h-px w-full bg-white/10 mb-8" />
                                <p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Our executive suites operate securely and discreetly. For digital correspondence, please use the direct channels provided in our directory.
                                </p>
                            </div>
                        </div>

                        {/* Light Right Side - Directory */}
                        <div className="lg:w-7/12 bg-white p-10 lg:p-16 flex flex-col justify-center min-w-0">
                            
                            <h2 className="text-2xl font-bold text-brand-navy mb-2 tracking-tight">Direct Communications</h2>
                            <p className="text-slate-500 mb-12 font-light text-lg">Connect with our specialized banking departments.</p>

                            <div className="space-y-0 flex flex-col">
                                
                                {/* Directory Item */}
                                <a href="mailto:info@unitedcooperatetrust.com" className="group flex flex-col py-6 border-b border-slate-100 hover:border-brand-blue transition-colors relative">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-blue transition-colors">For general inquiries</h3>
                                    <span className="font-light tracking-wide text-lg sm:text-xl text-brand-navy group-hover:text-brand-blue transition-colors break-all pr-12">info@unitedcooperatetrust.com</span>
                                    
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                    </div>
                                </a>

                                {/* Directory Item */}
                                <a href="mailto:customerservice@unitedcooperatetrust.com" className="group flex flex-col py-6 border-b border-slate-100 hover:border-brand-blue transition-colors relative">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-blue transition-colors">For customer service</h3>
                                    <span className="font-light tracking-wide text-lg sm:text-xl text-brand-navy group-hover:text-brand-blue transition-colors break-all pr-12">customerservice@unitedcooperatetrust.com</span>
                                    
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                    </div>
                                </a>

                                {/* Directory Item */}
                                <a href="mailto:loan@unitedcooperatetrust.com" className="group flex flex-col py-6 border-b border-slate-100 hover:border-brand-blue transition-colors relative">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-blue transition-colors">For loan inquiries</h3>
                                    <span className="font-light tracking-wide text-lg sm:text-xl text-brand-navy group-hover:text-brand-blue transition-colors break-all pr-12">loan@unitedcooperatetrust.com</span>
                                    
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                    </div>
                                </a>

                                {/* Directory Item */}
                                <a href="mailto:newsletters@unitedcooperatetrust.com" className="group flex flex-col py-6 border-b border-slate-100 hover:border-brand-blue transition-colors relative">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-brand-blue transition-colors">For newsletters</h3>
                                    <span className="font-light tracking-wide text-lg sm:text-xl text-brand-navy group-hover:text-brand-blue transition-colors break-all pr-12">newsletters@unitedcooperatetrust.com</span>
                                    
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                    </div>
                                </a>

                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </PublicLayout>
    );
}
