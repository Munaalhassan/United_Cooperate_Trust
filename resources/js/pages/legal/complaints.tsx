import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Complaints() {
    return (
        <PublicLayout>
            <Head title="Complaints | United Cooperate Trust Bank" />

            {/* Page Header */}
            <div className="bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white font-bold">Complaints</span>
                    </nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Complaints
                    </motion.h1>
                    <div className="w-24 h-1 bg-brand-blue mt-8" />
                </div>
            </div>

            {/* Content */}
            <div className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        <div className="space-y-8 text-slate-600 leading-relaxed text-base font-light">

                            <p>
                                If you are not satisfied with our service, you can make a direct complaint to the Complaints Service.
                            </p>

                            <p>
                                Complaints must clearly indicate your contact details and include a brief description of the facts that are the basis of the complaint, in a detailed and chronological manner.
                            </p>

                            <p>
                                Once the complaint is received, the Complaints Service will provide you with the response within ten (10) business days.
                            </p>

                            <p>
                                If a response cannot be provided within the specified time mentioned above, the person in charge of the complaint will revert to you with the new expected date of completion and the reason for the delay.
                            </p>

                            <p>
                                In any case, the definitive response will be provided no later than fifty (50) business days.
                            </p>

                            <p>
                                If you are not satisfied with the response given by United Cooperate Trust Bank, you can submit a request for an out-of-court complaint settlement to the Commission de Surveillance du Secteur Financier ("CSSF") at the following address:
                            </p>

                            {/* CSSF Address Block */}
                            <div className="bg-slate-50 border-l-4 border-brand-blue p-6 rounded-sm">
                                <p className="font-semibold text-brand-navy text-base">Commission de Surveillance du Secteur Financier</p>
                                <p className="text-slate-500 text-sm mt-2">283 Route d'Arlon, L-1150 Luxembourg</p>
                                <a href="http://www.cssf.lu" className="text-brand-blue text-sm hover:underline mt-1 inline-block">www.cssf.lu</a>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm mt-10">
                                <h3 className="text-lg font-bold text-brand-navy mb-4 uppercase tracking-wider">Submit a Complaint</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    To submit a complaint to United Cooperate Trust Bank, please contact us via email or write to us at our registered address.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-semibold text-brand-navy">Email:</span> <a href="mailto:customerservice@unitedcooperatetrust.com" className="text-brand-blue hover:underline">customerservice@unitedcooperatetrust.com</a></p>
                                    <p><span className="font-semibold text-brand-navy">Address:</span> 1256 - Butantã, São Paulo - SP, 05503-000, USA</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </PublicLayout>
    );
}
