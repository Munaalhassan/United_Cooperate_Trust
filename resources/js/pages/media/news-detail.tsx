import React, { useState, useEffect, useCallback } from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronRight, 
    Calendar, 
    ArrowLeft, 
    Twitter, 
    Linkedin, 
    Facebook,
    ChevronLeft,
    X,
    Maximize2,
    Pause,
    Play,
    Copy,
    Share2
} from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { toast } from 'sonner';

interface PostImage {
    id: number;
    image_url: string;
    caption: string | null;
}

interface Post {
    id: number;
    type: string;
    date: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string | null;
    images: PostImage[];
}

interface Props {
    post: Post;
}

// Separate Gallery Component for better state management
const BlogGallery = ({ images, postTitle }: { images: PostImage[], postTitle: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && !isFullscreen) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, isFullscreen, nextSlide]);

    // Handle Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isFullscreen) return;
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') setIsFullscreen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen, nextSlide, prevSlide]);

    return (
        <div className="mt-24">
            <h3 className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-brand-blue/30 block"></span> Photo Gallery
            </h3>

            {/* Main Carousel Display */}
            <div className="relative group">
                <div className="relative aspect-[16/9] lg:aspect-[21/9] bg-slate-100 overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full cursor-pointer relative"
                            onClick={() => setIsFullscreen(true)}
                        >
                            <img 
                                src={images[currentIndex].image_url} 
                                alt={images[currentIndex].caption || postTitle} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500" />
                            
                            {/* Zoom Indicator */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                                    <Maximize2 className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                        <motion.div 
                            key={`progress-${currentIndex}-${isAutoPlaying}`}
                            initial={{ width: 0 }}
                            animate={{ width: isAutoPlaying ? '100%' : '0%' }}
                            transition={{ duration: isAutoPlaying ? 5 : 0, ease: "linear" }}
                            className="h-full bg-brand-blue"
                        />
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <button 
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-blue transition-all pointer-events-auto shadow-xl"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-blue transition-all pointer-events-auto shadow-xl"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Auto-play Toggle */}
                <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="absolute top-6 right-6 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-blue transition-colors z-10"
                >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
            </div>

            {/* Caption Display */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`caption-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-8 text-center"
                >
                    {images[currentIndex].caption ? (
                        <p className="text-sm font-bold text-brand-navy uppercase tracking-widest leading-relaxed max-w-2xl mx-auto italic">
                            "{images[currentIndex].caption}"
                        </p>
                    ) : (
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentIndex + 1} / {images.length}
                        </p>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Thumbnail Navigation */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
                {images.map((img, idx) => (
                    <button 
                        key={img.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative w-16 h-12 lg:w-24 lg:h-16 overflow-hidden border-2 transition-all duration-300 ${currentIndex === idx ? 'border-brand-blue scale-110 shadow-lg' : 'border-transparent grayscale hover:grayscale-0'}`}
                    >
                        <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-10 backdrop-blur-sm"
                    >
                        <button 
                            onClick={() => setIsFullscreen(false)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`full-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="w-full h-[70vh] flex items-center justify-center"
                                >
                                    <img 
                                        src={images[currentIndex].image_url} 
                                        alt="" 
                                        className="max-w-full max-h-full object-contain shadow-2xl"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Lightbox Navigation */}
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                    className="p-4 md:p-8 text-white/20 hover:text-brand-blue transition-all pointer-events-auto"
                                >
                                    <ChevronLeft className="w-12 h-12 md:w-20 md:h-20" />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                    className="p-4 md:p-8 text-white/20 hover:text-brand-blue transition-all pointer-events-auto"
                                >
                                    <ChevronRight className="w-12 h-12 md:w-20 md:h-20" />
                                </button>
                            </div>

                            {/* Lightbox Caption */}
                            <div className="mt-12 text-center max-w-4xl px-6">
                                {images[currentIndex].caption && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-white text-lg md:text-xl font-light italic mb-4"
                                    >
                                        "{images[currentIndex].caption}"
                                    </motion.p>
                                )}
                                <div className="flex items-center justify-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                    <span className="w-12 h-px bg-white/20"></span>
                                    {currentIndex + 1} of {images.length}
                                    <span className="w-12 h-px bg-white/20"></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function NewsDetail({ post }: Props) {
    if (!post) {
        return (
            <PublicLayout>
                <div className="py-20 text-center">
                    <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">Post not found.</p>
                </div>
            </PublicLayout>
        );
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = post.title;

    const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
        let url = '';
        switch (platform) {
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
        }
        window.open(url, '_blank', 'width=600,height=400');
    };

    const handleCopyLink = () => {
        const textToCopy = `Title: ${post.title}\nLink: ${shareUrl}${post.image_url ? `\nImage: ${post.image_url}` : ''}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            toast.success('Link and metadata copied to clipboard!');
        }).catch(() => {
            toast.error('Failed to copy link.');
        });
    };

    return (
        <PublicLayout>
            <Head title={`${post.title} | United Cooperate Trust Bank`} />

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
                        {/* Featured Image */}
                        {post.image_url ? (
                            <img 
                                src={post.image_url} 
                                alt={post.title} 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-brand-navy flex items-center justify-center text-white/10 font-bold text-6xl uppercase tracking-tighter">
                                {post.type}
                            </div>
                        )}
                        <div className="absolute top-0 left-0 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3">
                            {post.type}
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
                            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-8"
                        >
                            {post.title}
                        </motion.h1>

                        {/* Social Share Bar */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 py-8 border-y border-slate-100 mb-12"
                        >
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Share This Article:</span>
                            <div className="flex items-center gap-8">
                                <button 
                                    onClick={() => handleShare('twitter')}
                                    className="text-slate-400 hover:text-brand-blue transition-all transform hover:scale-110"
                                    title="Share on Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => handleShare('linkedin')}
                                    className="text-slate-400 hover:text-brand-blue transition-all transform hover:scale-110"
                                    title="Share on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => handleShare('facebook')}
                                    className="text-slate-400 hover:text-brand-blue transition-all transform hover:scale-110"
                                    title="Share on Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <div className="w-px h-6 bg-slate-100 mx-2 hidden sm:block"></div>
                                <button 
                                    onClick={handleCopyLink}
                                    className="flex items-center gap-2 text-brand-blue hover:text-brand-navy transition-all font-bold text-[10px] uppercase tracking-widest bg-brand-blue/5 px-4 py-2 rounded-full border border-brand-blue/10 hover:bg-brand-blue/10"
                                >
                                    <Copy className="w-3.5 h-3.5" /> Copy Link & Info
                                </button>
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
                        <p className="text-xl font-medium text-slate-700 mb-12 leading-relaxed whitespace-pre-wrap">
                            {post.excerpt}
                        </p>
                        
                        <div className="whitespace-pre-wrap">
                            {post.content}
                        </div>
                    </motion.div>

                    {/* Sophisticated Gallery Component */}
                    {post.images && post.images.length > 0 && (
                        <BlogGallery images={post.images} postTitle={post.title} />
                    )}

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
