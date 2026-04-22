import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { QuickServicesSidebar } from '@/components/quick-services-sidebar';
import { motion } from 'framer-motion';
import { ChevronRight, Key, Link2, MailWarning, DatabaseZap, Smartphone, Lock, WifiOff, DownloadCloud, LogOut, Share2, ShieldAlert } from 'lucide-react';

const securityTips = [
    {
        title: "Your password, keep it secret",
        icon: Key,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Choose strong, complex and long password (mix of numbers, lower/upper characters and special characters, and not guessable).</li>
                <li>Create and maintain different passwords per account. Periodically change your passwords.</li>
                <li>Credential details are assigned individually to clients, who remain responsible for their use. Therefore, do not share or communicate your password to anyone in writing, orally, or by email. The Bank does not need to know it and will never ask for your confidential information via phone or email. If you lose or forget it, you can contact us to reset it.</li>
                <li>If storing passwords in a repository, ensure it is secure and strongly protected.</li>
            </ul>
        )
    },
    {
        title: "Links & Attachments, think twice before you click",
        icon: Link2,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Irrespective of the email sender, always double check who sent an attachment before you open it. Do not click on attachments in suspicious emails, text or pop-up messages.</li>
                <li>Treat with vigilance emails received from a Bank requesting for login credentials, OTP or passwords.</li>
            </ul>
        )
    },
    {
        title: "Unknown senders, extra caution",
        icon: MailWarning,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>If you receive a link from an unknown sender, retype it into your address bar instead of directly clicking on it. If you know the sender but the content of the message seems unusual to you, apply the same rule: treat it with suspicion.</li>
                <li>Check the "real address" behind the displayed one: pass the mouse over the link or long-press to preview and verify the address.</li>
            </ul>
        )
    },
    {
        title: "Your data, make sure it's protected at all time",
        icon: DatabaseZap,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Protect your devices from security threats (virus, malware, etc.) and make sure your data is secure by using a firewall and an antivirus software.</li>
            </ul>
        )
    },
    {
        title: "Mobile e-Banking, use the official app",
        icon: Smartphone,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>For mobile e-Banking, use the official app provided by the Bank and download only from official trusted sources (app stores of Apple and Google).</li>
            </ul>
        )
    },
    {
        title: "The web address (URL), make sure it's secure",
        icon: Lock,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Always look for "https://" and the padlock icon in the browser's address bar to ensure the connection is encrypted and secure.</li>
            </ul>
        )
    },
    {
        title: "Avoid public Wi-Fi and unreliable devices",
        icon: WifiOff,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>For sensitive activities - such as e-Banking, emails, and e-commerce websites -, avoid the use of free or unreliable Wi-Fi hotspots (hotels, airports, city, etc.), or public 'kiosk' internet-browsing devices.</li>
                <li>Never allow the web browser to remember your credentials.</li>
            </ul>
        )
    },
    {
        title: "Software, trusted source and up-to-date",
        icon: DownloadCloud,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Download software from the legitimate vendor sources.</li>
                <li>Regularly update your software and antivirus to apply the latest security patches and remain protected. To make things easier, you can choose to have your software update automatically when you install it.</li>
                <li>Do not download illegal files. These are likely to be unsafe. Download files only on official websites.</li>
            </ul>
        )
    },
    {
        title: "Logging out, close the session",
        icon: LogOut,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Always terminate your online banking session with the log-out/sign-out button.</li>
                <li>Avoid having several pages or tabs open at the same time. Your session data could be intercepted by one of these pages.</li>
            </ul>
        )
    },
    {
        title: "Social medias, care before to share",
        icon: Share2,
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Be vigilant when feeding social medias. These may widely expose your current location, personal habits, clues about your passwords, answers to security questions, etc.</li>
            </ul>
        )
    }
];

export default function SecurityAwareness() {
    return (
        <PublicLayout>
            <Head title="Security Awareness | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/quick-services/e-banking-registration" className="hover:text-brand-blue transition-colors">Quick Services</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Security Awareness</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        Security Awareness
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
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Security Tips</h2>
                            
                            <div className="text-lg text-slate-600 leading-relaxed font-light mb-8 space-y-6">
                                <p>
                                    Discover our security tips and best practices for secure online browsing, in particular on our online 24/7 platforms. United Cooperate Trust Bank recommends the following practices to protect your data and information in order to ensure higher security when you browse the Internet.
                                </p>
                            </div>

                            {/* Alert Banner */}
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-sm mb-12 flex gap-4 items-start shadow-sm">
                                <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-red-800 font-bold mb-1 uppercase tracking-widest text-sm">Urgent Assistance</h4>
                                    <p className="text-red-700">
                                        For assistance or reporting unusual activity, please call immediately or email your usual Bank contact person.
                                    </p>
                                </div>
                            </div>

                            {/* Tips Grid */}
                            <div className="space-y-8 mb-16">
                                {securityTips.map((tip, idx) => {
                                    const Icon = tip.icon;
                                    return (
                                        <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex gap-6 group hover:shadow-md transition-shadow">
                                            <div className="shrink-0 mt-1">
                                                <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-brand-navy mb-4">{tip.title}</h3>
                                                <div className="text-slate-600 leading-relaxed text-sm">
                                                    {tip.content}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </PublicLayout>
    );
}
