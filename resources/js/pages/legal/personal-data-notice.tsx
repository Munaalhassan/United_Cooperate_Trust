import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
    {
        title: 'The personal data United Cooperate Trust Bank collects and processes',
        body: `The Bank ensures that personal data is collected lawfully and properly via its Website.

"Personal data" means information which directly or indirectly identifies the Subject, such as his/her name, email address or postal address.

The Bank keeps a file of personal data provided to it by Subjects and processes that information. Personal data is processed with the consent of Subjects, only to the extent necessary in light of the purpose of processing and the time required in each case. In each case we only collect the personal data which is strictly necessary to take the steps or provide the service which the Subject has requested.`,
    },
    {
        title: 'Purposes of processing',
        body: `The Bank and/or anyone else who processes data on its instructions and on its behalf processes the personal data of Subjects to communicate with them if the Subjects have electronically filled in the forms on the Website (such as the complaint form, the compliment form, the contact form, etc.) or have asked for updates via newsletters, financial analyses, etc., or via emails if they have subscribed to that service via the Website.

The Bank processes the personal data of Subjects to facilitate them and handle applications which Subjects have sent online via the Website (e.g. contact form details).

The Bank processes the personal data of Subjects to manage the Bank and the Bank's Group personnel and HR issues.

The personal data of Subjects may also be processed in order to: carry out checks required by law; prevent, deter and suppress illegal acts; upgrade the services provided; and market the services of The Bank, provided that all the conditions laid down by law are met.

The Bank collects and processes personal data solely and exclusively for the purposes mentioned above, and only to the extent needed to effectively achieve those ends.`,
    },
    {
        title: 'Personal data of minors',
        body: `The Bank appreciates how important it is to safeguard the personal data of minors. The Website is not aimed at or deliberately designed to be aimed at minors. The Bank's intention is not to knowingly collect or hold the personal data of minors who may have access to its Website.

However, since the Bank cannot feasibly ensure/confirm this, any minors who do use the Website and send their personal data to the Bank via the website are not only obliged, but are also expected, to have obtained consent from the persons exercising parental care or from their guardians. Adults are recommended to properly supervise the minors under their care while they are surfing the internet and this Website in particular.`,
    },
    {
        title: 'Data security',
        body: `The Bank processes personal data in a way that safeguards its confidentiality. The Bank has taken all appropriate organisational and technical steps to ensure data security and that data is safeguarded against any random or unlawful destruction, random loss, corruption, prohibited disclosure or access, or any other form of illegal processing.

Although concerted efforts are made to safeguard personal data, The Bank cannot guarantee the security of data transmitted to its Website simply because sending information via the internet is not completely safe.`,
    },
    {
        title: 'Data recipients',
        body: `United Cooperate Trust Bank / Globafin Group

The recipients of personal data include the Bank, and, if lawful conditions are met, subsidiaries of the Bank's Group and associated companies whose registered offices are in countries of the European Union, which are sent data in the context of their operations.

The Bank may use associates, acting in its name and on its behalf, to process personal data for the purposes which are set out above.

The Bank may also disclose the personal data of Subjects, if that is required by law, by a court judgment or regulatory decision, or when it is necessary in order to safeguard the Website.`,
    },
    {
        title: 'Links to third party websites',
        body: `Any interconnection between this Website and any other website using special links (links, hyperlinks or banners) does not mean that the Bank accepts any responsibility for the personal data protection and management policy on those websites.

Subjects must personally read the data protection and management policies on those websites.`,
    },
    {
        title: 'Right of access and right to object',
        body: `Subjects are entitled to know whether their personal data is or was being processed (right of access).

Subjects can also submit written objections at any time about their personal data being processed (right to object) and request that specific steps be taken, such as asking for their data to be corrected, temporarily not used, blocked, not transmitted or deleted.

Objections must be sent in writing to: United Cooperate Trust Bank, Corporate Governance, USA.`,
    },
    {
        title: 'Amendments to the personal data protection terms',
        body: `Since this notice and the personal data protection terms it contains may be amended, Subjects must regularly check the content of this notice for any changes.`,
    },
    {
        title: 'Cookies',
        body: `To ensure that its Website operates properly, The Bank might send cookies (small data files), which are stored on the Subject's computer.

Cookies are small text files which are stored on your computer, your mobile phone or any other electronic device when you visit a website.

The website uses cookies to remember what you did on the website for a certain period of time, and what your language, font size and other display preferences are. That means you do not need to enter your preferences each time you visit the website or navigate between pages.

Moreover, cookies help us analyse how you use our website and whether you encounter difficulties during navigation. They also allow us to tailor online adverts and offers to your interests and needs.`,
    },
    {
        title: 'Which cookies does the Bank use',
        body: `On our website we use essential cookies, performance cookies, functionality and targeting/advertising cookies, as well as traffic data processing cookies. We use cookies exclusively sent by us.

We use two cookie categories:

Session cookies – They remain on your device until you leave our website.

Persistent cookies – They remain on your device longer or until you delete them yourselves. The time these cookies remain on your device depends on their expiration period and your browser settings.

Cookies are stored on your device only after you have given your consent. Unless you accept cookies, our website may not perform or function properly.`,
    },
    {
        title: 'Essential cookies',
        body: `These cookies are essential for our website to function properly. They allow you to browse the website and use its features, such as accessing secure areas.`,
    },
    {
        title: 'Performance cookies',
        body: `Performance cookies collect information about how you use our website, for instance which pages you visit most often, and whether you get error messages. All information collected by these cookies is aggregated. It is only used to improve our website's performance.`,
    },
    {
        title: 'Functionality cookies',
        body: `Functionality cookies allow the website to remember choices you make, such as your username, language and the region you are in. This means we can provide you with enhanced, personalised features. Moreover, they help us provide services you have asked for, such as watching a video or using social media.

They do not enable us to track your browsing activity on other websites.`,
    },
    {
        title: 'Targeting/Advertising and usage statistics cookies',
        body: `We use these cookies to deliver adverts and push notifications that are more relevant to you and your interests. We may use them to: deliver targeted adverts/offers; limit the time an advert is displayed; measure the effectiveness of an advertising campaign; and to improve our website by collecting information about how visitors interact with our website.`,
    },
    {
        title: 'Traffic data processing cookies',
        body: `We use traffic data processing cookies to track technical issues that might arise while you are browsing our website. Based on the information collected by these cookies, we correct technical issues and problems and we constantly improve the services offered on our website.`,
    },
];

export default function PersonalDataNotice() {
    return (
        <PublicLayout>
            <Head title="Personal Data Notice | United Cooperate Trust Bank" />

            {/* Page Header */}
            <div className="bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white font-bold">Personal Data Notice</span>
                    </nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Personal Data Notice
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
                            The bank by the name of United Cooperate Trust Bank (hereinafter the Bank) would like to inform visitors or users of this website (hereinafter the Website) who provide personal data (hereinafter the Subjects) that their personal data will be processed in accordance with the rules below, the relevant provisions of USA ish law in force from time to time and European legislation on personal data, as well as the decisions, guidelines and regulatory acts of the USA ish Data Protection Authority.
                        </p>

                        {/* Sections */}
                        <div className="space-y-10 mt-8">
                            {sections.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                    className="border-t border-slate-100 pt-8"
                                >
                                    <h2 className="text-base font-bold text-brand-navy mb-4 uppercase tracking-wider">{section.title}</h2>
                                    <div className="space-y-4">
                                        {section.body.split('\n\n').map((para, j) => (
                                            <p key={j} className="text-slate-600 text-base font-light leading-relaxed">{para}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* How to delete cookies */}
                        <div className="border-t border-slate-100 pt-8 mt-8">
                            <h2 className="text-base font-bold text-brand-navy mb-4 uppercase tracking-wider">How to delete cookies</h2>
                            <p className="text-slate-600 text-base font-light leading-relaxed mb-4">
                                You can delete cookies and disable their use. Choose your browser and follow the instructions:
                            </p>
                            <ul className="space-y-2">
                                {['Chrome', 'Safari', 'Firefox', 'Internet Explorer'].map((browser) => (
                                    <li key={browser}>
                                        <span className="text-slate-500 text-sm font-medium">{browser}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-500 text-sm mt-4 font-light">
                                If you use a different browser, follow the instructions from its provider.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </PublicLayout>
    );
}
