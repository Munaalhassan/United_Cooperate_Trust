import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#007AFF' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={cn(
                        "fixed bottom-8 right-8 z-[100]",
                        "w-12 h-12 rounded-full",
                        "bg-[#0a2540] text-white",
                        "flex items-center justify-center shadow-2xl shadow-brand-blue/20",
                        "border border-white/10 backdrop-blur-sm transition-colors duration-300",
                        "group"
                    )}
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
