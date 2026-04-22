import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function NewsDetail() {
    return (
        <PublicLayout>
            <Head title="London Thought Leadership | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Simple Header */}
            <div className="bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
                    <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/media/news-events" className="hover:text-brand-blue transition-colors">News</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-brand-navy">Detail</span>
                    </nav>
                </div>
            </div>

            {/* Article Hero Section */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-12 lg:pb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative w-full aspect-[21/9] bg-slate-100 overflow-hidden"
                    >
                        {/* Placeholder Image with Tag */}
                        <OptimizedImage 
                            src="/images/hero/slide-1.jpg" 
                            alt="London Thought Leadership" 
                            width={1200}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3">
                            Event
                        </div>
                    </motion.div>

                    <div className="max-w-3xl mx-auto mt-12 lg:mt-16">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 text-brand-blue font-bold text-[11px] uppercase tracking-[0.2em] mb-6"
                        >
                            <Calendar className="w-4 h-4" />
                            20 September 2018
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-8"
                        >
                            London Thought <br /> Leadership
                        </motion.h1>

                        {/* Social Share Bar */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-8 py-6 border-y border-slate-100 mb-12"
                        >
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Share This Article:</span>
                            <div className="flex items-center gap-6">
                                <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Article Content Section */}
            <div className="bg-white pb-32">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="prose prose-slate prose-lg max-w-none prose-headings:text-brand-navy prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:font-light"
                    >
                        <p className="text-xl font-medium text-slate-700 mb-12 leading-relaxed">
                            On the occasion of United Cooperate Trust Bank sponsorship of the Greek Pavilion, featuring Studio INI's installation "Disobedience" by Mrs. Nassia Inglessis at the London Biennale 2018, the Bank hosted the London Thought Leadership Series event.
                        </p>
                        
                        <p>
                            The event, held at the prestigious Somerset House, brought together industry leaders, creative visionaries, and financial experts to discuss "The future of London: Challenges and opportunities ahead." 
                        </p>
                        
                        <p>
                            As a global financial institution with a deep-rooted commitment to cultural and intellectual progress, United Cooperate Trust Bank continues to foster environments where innovation and strategy intersect. The London Biennale provides a unique backdrop for these discussions, emphasizing the role of design and architecture in shaping modern urban landscapes.
                        </p>

                        <div className="my-16 p-8 bg-slate-50 border-l-4 border-brand-blue">
                            <p className="text-xl italic font-light text-brand-navy m-0">
                                "Our commitment to London extends beyond the financial sector; we are investors in the city's intellectual and creative capital."
                            </p>
                        </div>

                        <p>
                            The series aims to spark meaningful dialogue on how global centers like London can adapt to shifting geopolitical climates while maintaining their status as hubs of excellence. Participants explored topics ranging from digital transformation in banking to the impact of artistic installations on community engagement.
                        </p>
                    </motion.div>

                    {/* Navigation Footer */}
                    <div className="mt-20 pt-12 border-t border-slate-100 flex justify-start">
                        <Link 
                            href="/media/news-events" 
                            className="flex items-center gap-3 text-brand-navy hover:text-brand-blue font-bold text-xs uppercase tracking-[0.2em] transition-all group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to News List
                        </Link>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
