import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const posts = [
    {
        type: 'Event',
        date: '20 September 2018',
        title: 'London Thought Leadership',
        excerpt: 'The future of London: Challenges and opportunities ahead.',
        image: 'bg-brand-navy'
    },
    {
        type: 'Event',
        date: '04 September 2018',
        title: 'Andros International Yacht Race 2018',
        excerpt: 'Gold sponsor of 51st International Andros Yacht Race «John V. Goulandris».',
        image: 'bg-brand-blue'
    },
    {
        type: 'News',
        date: '01 August 2017',
        title: 'Acropolis – Discussion with Messrs Ramfos and Nanopoulos',
        excerpt: 'Messrs Ramfos and Nanopoulos spoke at an event hosted by United Cooperate Trust Bank.',
        image: 'bg-slate-700'
    },
    {
        type: 'Event',
        date: '06 June 2017',
        title: 'Eurobank Regatta 2017',
        excerpt: 'Gold sponsor of 50th International Andros Yacht Race «John V. Goulandris».',
        image: 'bg-slate-600'
    },
    {
        type: 'News',
        date: '29 June 2016',
        title: '30th anniversary of United Cooperate Trust Bank',
        excerpt: "Celebration of the Bank's 30 years anniversary.",
        image: 'bg-brand-navy'
    }
];

export default function NewsEvents() {
    return (
        <PublicLayout>
            <Head title="News and Events | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Media</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy tracking-tight mb-6"
                    >
                        News and Events
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-2xl font-light"
                    >
                        Stay informed with the latest press releases, corporate announcements, and upcoming institutional events from United Cooperate Trust Bank.
                    </motion.p>
                </div>
            </div>

            {/* Main Content - Blog Layout */}
            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.article 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                {/* Image Placeholder */}
                                <div className={`w-full h-48 ${post.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 uppercase tracking-widest text-brand-navy">
                                        {post.type}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs text-brand-blue font-bold uppercase tracking-widest mb-4">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <h2 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href={post.title === 'London Thought Leadership' ? '/media/news-events/london-thought-leadership' : '#'} className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors uppercase tracking-widest mt-auto">
                                        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center">
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-white text-brand-navy font-bold rounded-sm hover:bg-slate-50 transition-colors">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-transparent text-slate-500 hover:bg-white transition-colors rounded-sm">
                                2
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-transparent text-slate-500 hover:bg-white transition-colors rounded-sm">
                                3
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </PublicLayout>
    );
}
