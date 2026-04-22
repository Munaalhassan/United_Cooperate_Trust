import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Validity of these Terms',
        body: `The Terms regulate how you should use the Website.

Using the Website means you fully and unreservedly accept the Terms. If you disagree with the Terms, or do not want to be bound by them, please refrain from using the Website.

If you use any service or application on the Website or enter into any transaction that is regulated by more specific terms and conditions of use, those terms will apply together with these Terms. However, in the case of conflict, the more specific terms and conditions of use for each service, transaction or application take precedence.`,
    },
    {
        title: 'Amendment of Terms',
        body: `We are entitled to amend the Terms whenever we consider it necessary. All amendments take effect once they appear on the Website.

You should check for any changes to the Terms that have been made. If you continue to use the Website after new Terms have been uploaded, you will be assumed to have accepted the amendments.`,
    },
    {
        title: 'Your obligations',
        body: `As a visitor, you are obliged to use the Website for legitimate purposes, in accordance with USA ish, European and International law, telecommunications law, as well as the instructions which appear on the Website. You should act in accordance with the requirements of good faith and morality at all times.

It is up to you whether to use the Website, which you can do using your own hardware and software. You are personally responsible for safeguarding your computer against viruses, hacking/cyberattacks, and malware.

You must refrain from doing anything that could limit or prevent third parties from using the Website, and/or whose purpose is to overload the website, undermine or corrupt it, bring it down, damage it or cause it to malfunction. You must also refrain from any illegal, abusive or improper acts when using the Website.

You are responsible for any harm done to us through your acts or omissions which constitute a breach of your obligations under these Terms. It is self-evident that this also includes cases where we become embroiled in litigation or are obliged to pay fines or compensation to third parties because you breached your obligations as a visitor. We reserve our right to seek redress against you in these cases.`,
    },
    {
        title: 'Disclaimer',
        body: `The website is offered on an "as is" basis. You use the Website at your own responsibility. We do not guarantee – and so are not liable for – its functionality and content.

Although we make concerted efforts in this regard, we cannot guarantee the correctness, completeness and integrity of the Website or that it is up to date, free of technical defects, accurate, clear, suitable, valid, available or that the information and content will be provided without interruption, or that you will be able to use or access to it at all times.

We are not responsible in any circumstances, even in cases of negligence, for any loss you suffer through using the Website and from the information on it.

That information, and any other information we provide via the Website, is not a direct or indirect exhortation or advice to engage in any investments or other transactions that have financial results. You should examine and evaluate the information provided, and then act as you see fit. We are not responsible for losses resulting from how information on the Website is used.

We have taken all steps needed to ensure high levels of security and to safeguard our Website in line with standard business practice.

We regularly update our protection systems and anti-virus software has been installed. Nonetheless, we cannot guarantee you will be securely connected to our Website and that it is virus-free, and we bear no responsibility for damage to hardware, software, files or other forms of loss caused by viruses or malware.`,
    },
    {
        title: 'Industrial & intellectual property rights',
        body: `The commercial name, trademark and other distinctive signs and entire content of the Website (excluding protected third party rights), which includes but is not limited to: texts, graphics, photographs, videos, news, articles, information, data, diagrams, images, product/service names and descriptions, as well as the interface, look and layout of the materials and the software, are our exclusive intellectual and industrial property and are protected by the relevant provisions of USA ish, European and International intellectual and industrial property law.

You can print, copy or save specific sections of the Website content as long as you reference the source. You can only do this for personal information and use, and not for commercial or other purposes.

It should be clearly understood that this is not a copyright license under any circumstances.

In all other respects, all acts or measures taken without our prior written consent relating to any manner, means or type of: copying, reproduction, deletion, republication, sale, transmission, distribution, execution, publication, uploading, translation, modification and exploitation of all types of materials, part thereof or otherwise, which appear on or are part of the website, are prohibited.

All other trademarks, distinctive signs and third party copyrights which may appear on the Website are protected by their lawful proprietors.`,
    },
    {
        title: 'Links to third party websites',
        body: `Our Website may contain links, hyperlinks and banners which will take you to third party websites not managed by us, and over whose content we have no control. That is why we accept no responsibility for those websites or their content and provide no type of guarantee, exhortation or recommendation concerning them.

Hyperlinks are simply provided for your convenience. The linked websites have their own, separate terms and conditions of use. If you have any questions about or want to raise issues relating to those websites, please contact the webmaster on those websites.`,
    },
    {
        title: 'Applicable law',
        body: `These Terms are governed by the laws of USA. The Courts of USA have jurisdiction to interpret these Terms and to resolve any disputes that arise.

If one of the Terms is found to be invalid or is declared to be null and void, that will not affect the other Terms which will remain in effect and will apply as normal.`,
    },
];

export default function TermsOfUse() {
    return (
        <PublicLayout>
            <Head title="Terms of Use | United Cooperate Trust Bank" />

            {/* Page Header */}
            <div className="bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white font-bold">Terms of Use</span>
                    </nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Terms of Use
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
                        className="space-y-6"
                    >
                        {/* Intro */}
                        <p className="text-slate-600 text-base font-light leading-relaxed">
                            Our website (<a href="http://www.greenpasscapital.com" className="text-brand-blue hover:underline">www.greenpasscapital.com</a>) enables you to learn more about what United Cooperate Trust Bank does, as well as the products and services the Bank offers. Please read these terms and conditions of use before using the website.
                        </p>

                        {/* Sections */}
                        <div className="space-y-10 mt-8">
                            {sections.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="border-t border-slate-100 pt-8"
                                >
                                    <h2 className="text-lg font-bold text-brand-navy mb-4 uppercase tracking-wider">{section.title}</h2>
                                    <div className="space-y-4">
                                        {section.body.split('\n\n').map((para, j) => (
                                            <p key={j} className="text-slate-600 text-base font-light leading-relaxed">{para}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </PublicLayout>
    );
}
