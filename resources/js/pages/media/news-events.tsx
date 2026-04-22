import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { newsDetail } from '@/routes/media';

interface Post {
    id: number;
    type: string;
    date: string;
    title: string;
    slug: string;
    excerpt: string;
    image_url: string | null;
}

interface Props {
    posts: {
        data: Post[];
        links: any[];
    };
}

export default function NewsEvents({ posts }: Props) {
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
                        {posts.data.length > 0 ? posts.data.map((post, idx) => (
                            <motion.article 
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                {/* Image */}
                                <div className={`w-full h-48 bg-slate-200 relative overflow-hidden`}>
                                    {post.image_url ? (
                                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full bg-brand-navy flex items-center justify-center text-white/10 font-bold text-4xl uppercase tracking-tighter">
                                            {post.type}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 uppercase tracking-widest text-brand-navy">
                                        {post.type}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs text-brand-blue font-bold uppercase tracking-widest mb-4">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <h2 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href={newsDetail.url(post.slug)} className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors uppercase tracking-widest mt-auto">
                                        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        )) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">No news or events found at the moment.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {posts.links.length > 3 && (
                        <div className="mt-16 flex justify-center">
                            <div className="flex items-center gap-2">
                                {posts.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || '#'}
                                        className={`w-10 h-10 flex items-center justify-center border border-slate-200 font-bold rounded-sm transition-colors ${link.active ? 'bg-brand-blue text-white' : 'bg-white text-brand-navy hover:bg-slate-50'} ${!link.url ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </PublicLayout>
    );
}
