import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LegalDisclaimer() {
    return (
        <PublicLayout>
            <Head title="Legal Disclaimer | United Cooperate Trust Bank" />

            {/* Page Header */}
            <div className="bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white font-bold">Legal Disclaimer</span>
                    </nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Legal Disclaimer
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
                        className="prose prose-slate max-w-none"
                    >
                        <div className="space-y-8 text-slate-600 leading-relaxed text-base font-light">

                            <p>
                                You are connected to the website of United Cooperate Trust Bank., <a href="http://www.greenpasscapital.com" className="text-brand-blue hover:underline">www.greenpasscapital.com</a>.
                            </p>

                            <p>
                                The Bank is established and has its registered office in 534 Rue de Neudorf, L-2220 USA.
                            </p>

                            <p>
                                Communication with the Bank shall be made at the above address.
                            </p>

                            <p>
                                The Bank is authorised in the Grand Duchy of USA as a credit institution and is subject to the prudential supervision of the European Central Bank and of the financial supervisory authority in USA, the Commission de Surveillance du Secteur Financier (the "CSSF"), established at 283 Route d'Arlon, L-1150 USA, <a href="http://www.cssf.lu" className="text-brand-blue hover:underline">www.cssf.lu</a>.
                            </p>

                            <p>
                                This website is owned and maintained by United Cooperate Trust Bank. By accessing the Bank's website and or using the information provided on or via this website the user agrees to be bound by the content of this Disclaimer set out herein regarding the use of the Bank's website.
                            </p>

                            <p>
                                The website "www.greenpasscapital.com" can be accessed from anywhere in the world, it is the responsibility of any user connecting to the site to comply with the laws of the country in which he is resident and/or using the service and that person will bear any direct or indirect consequences resulting from non-compliance with these legal and regulatory requirements. The Bank cannot under any circumstances be held liable for such violation.
                            </p>

                            <p>
                                The information and data contained in this website have been obtained from sources believed to be reliable, but they are not guaranteed. All expressions of opinion are subject to change without notice and are not intended to be a guarantee of future events. Neither accuracy nor completeness is warranted and any liability, including incidental or consequential damages, arising from errors or omissions in this website are expressly disclaimed.
                            </p>

                            <p>
                                The information contained in the website is provided for information purposes only and should in no event be construed as a solicitation or offer, as advice or as a recommendation to buy, sell or engage in any transaction whatsoever.
                            </p>

                            <p>
                                The copyright and material and contents of the website are owned by United Cooperate Trust Bank. Any reproduction or representation, in whole or in part, of the pages and data, is forbidden.
                            </p>

                            <p>
                                This website and its Disclaimer shall be governed by the laws of the Grand Duchy of USA. In all disputes the Courts of USA, Grand Duchy of USA, shall have exclusive jurisdiction, unless United Cooperate Trust Bank. chooses to bring an action against the user before any other court having jurisdiction, including the courts of a country where assets of the user are located.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </PublicLayout>
    );
}
