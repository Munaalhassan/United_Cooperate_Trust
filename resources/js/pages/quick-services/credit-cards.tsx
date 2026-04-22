import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { QuickServicesSidebar } from '@/components/quick-services-sidebar';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CardMockup = ({ type }: { type: 'gold' | 'world' | 'business' }) => {
    const gradients = {
        gold: 'bg-gradient-to-br from-[#d4af37] via-[#aa8222] to-[#806015]',
        world: 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900',
        business: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600',
    };

    return (
        <div className={`relative w-48 h-32 rounded-xl shadow-lg overflow-hidden ${gradients[type]} p-4 flex flex-col justify-between`}>
            {/* Chip */}
            <div className="w-8 h-6 bg-yellow-200/50 rounded-sm border border-yellow-400/30"></div>
            
            {/* Card Number Placeholder */}
            <div className="flex gap-2 text-white/70 font-mono text-sm tracking-widest mt-2">
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>3456</span>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end mt-2">
                <div className="text-[8px] text-white/70 uppercase tracking-widest font-semibold">
                    Lee M. Cardholder
                </div>
                {/* Mastercard Logo Mockup */}
                <div className="relative w-8 h-5 flex">
                    <div className="absolute left-0 w-5 h-5 bg-red-500 rounded-full opacity-80 mix-blend-multiply"></div>
                    <div className="absolute right-0 w-5 h-5 bg-yellow-500 rounded-full opacity-80 mix-blend-multiply"></div>
                </div>
            </div>
            
            {/* Overlay Gradient for shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"></div>
        </div>
    );
};

export default function CreditCards() {
    return (
        <PublicLayout>
            <Head title="Credit Cards | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/quick-services/e-banking-registration" className="hover:text-brand-blue transition-colors">Quick Services</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Credit Cards</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Credit Cards
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
                            <h2 className="text-3xl font-bold text-brand-navy mb-6">The Right Credit Card for You</h2>
                            
                            <div className="text-lg text-slate-600 leading-relaxed font-light mb-12">
                                <p>
                                    We offer credit card options to suit your individual circumstances and lifestyle or your company needs.
                                </p>
                            </div>

                            {/* Cards List */}
                            <div className="space-y-12 mb-16">
                                
                                {/* Mastercard Gold */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Mastercard Gold</h3>
                                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                                        <div className="shrink-0">
                                            <CardMockup type="gold" />
                                        </div>
                                        <ul className="list-disc pl-5 text-slate-600 space-y-2 pt-2">
                                            <li>Gold card with extensive travel insurance</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Mastercard World */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Mastercard World</h3>
                                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                                        <div className="shrink-0">
                                            <CardMockup type="world" />
                                        </div>
                                        <ul className="list-disc pl-5 text-slate-600 space-y-2 pt-2">
                                            <li>Mastercard World card with extensive travel insurance and travel assistance service</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Mastercard Business Credit Card */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Mastercard Business Credit Card</h3>
                                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                                        <div className="shrink-0">
                                            <CardMockup type="business" />
                                        </div>
                                        <ul className="list-disc pl-5 text-slate-600 space-y-2 pt-2">
                                            <li>Mastercard Business Card with extensive travel insurance and assistance service</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* Footer Note */}
                            <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-blue/20 mt-12 flex items-center justify-center text-center">
                                <p className="text-brand-navy font-semibold text-lg">
                                    Your Relationship Officer is available to discuss your credit card needs.
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </PublicLayout>
    );
}
