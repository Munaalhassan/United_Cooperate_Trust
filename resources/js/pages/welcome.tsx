import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

const slides = [
    '/images/hero/slide-1.jpg',
    '/images/hero/slide-2.jpg',
    '/images/hero/slide-3.jpg',
    '/images/hero/slide-4.jpg',
    '/images/hero/slide-5.jpg'
];

const services = [
    {
        title: "Private Banking",
        description: "A lifelong relationship based on personal attention, trust and leading expertise.",
        linkText: "Find out more",
        image: "/images/service-1.jpg",
        reverse: false
    },
    {
        title: "Corporate Banking",
        description: "Targeted products and services, expertly tailored to support your business plans.",
        linkText: "Explore",
        image: "/images/service-2.jpg",
        reverse: true
    },
    {
        title: "Fund Services",
        description: "Our focus is on providing a customized and superior quality service to our clients based on long term relationships and a team with extensive experience and expertise.",
        linkText: "Read more",
        image: "/images/service-3.jpg",
        reverse: false
    },
    {
        title: "United Cooperate Trust Bank embraces Open Banking",
        description: "Get to know what PSD2 brings you!",
        linkText: "Find out more!",
        image: "/images/service-4.jpg",
        reverse: true
    }
];

export default function Welcome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <PublicLayout>
            <Head title="United Cooperate Trust Bank" />
            
            {/* Hero Section */}
            <div className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
                {/* Slideshow Background */}
                <AnimatePresence initial={false}>
                    <motion.div 
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ 
                            backgroundImage: `url('${slides[currentSlide]}')` 
                        }}
                    />
                </AnimatePresence>
                
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent" />
                
                {/* Subtle Geometric Overlay */}
                <div 
                    className="absolute inset-0 z-10 opacity-10 pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                
                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                            If you think your <br />
                            <span className="text-brand-blue">Private Banking</span> needs <br />
                            are out of reach,<br />
                            <span className="relative inline-block mt-3">
                                <span className="relative z-10">think further.</span>
                                <motion.div 
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1.2, delay: 1.2, ease: "circOut" }}
                                    className="absolute bottom-1 left-0 w-full h-2 bg-brand-blue/80 origin-left -z-10"
                                />
                            </span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="text-sm md:text-base text-slate-300 mb-10 max-w-xl font-medium leading-relaxed"
                        >
                            Experience tailored financial solutions, exceptional personal service, and a legacy built on absolute trust and excellence.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm uppercase tracking-wider px-8 py-6 rounded-none flex items-center gap-2 group transition-all shadow-lg shadow-brand-blue/20">
                                Discover Private Banking
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                            </Button>
                            <Button variant="outline" className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy font-bold text-sm uppercase tracking-wider px-8 py-6 rounded-none transition-all">
                                Contact an Advisor
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Services Section - Expanding Pillars Design */}
            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-24">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                        >
                            Specialized Expertise
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight leading-tight"
                        >
                            Our Financial <span className="text-slate-400 font-light italic">Pillars</span>
                        </motion.h2>
                    </div>

                    {/* Columns Container */}
                    <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] w-full gap-4 lg:gap-0 border-t border-b border-slate-200">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group relative flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hover:flex-[1.8] border-r last:border-r-0 border-slate-200"
                            >
                                {/* Background Image with Color Shift */}
                                <div className="absolute inset-0 z-0">
                                    <motion.img 
                                        src={service.image} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    {/* Overlays */}
                                    <div className="absolute inset-0 bg-slate-100/90 group-hover:bg-brand-navy/60 transition-colors duration-700" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-brand-navy via-transparent to-transparent transition-opacity duration-700" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-brand-blue font-bold text-2xl mb-8 group-hover:text-white transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-brand-navy group-hover:text-white transition-colors duration-500 max-w-[200px] leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Expanded Content */}
                                    <div className="mt-auto overflow-hidden">
                                        <div className="transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                            <p className="text-slate-200 text-lg mb-8 leading-relaxed max-w-sm">
                                                {service.description}
                                            </p>
                                            <Button className="bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none px-8 py-6 font-bold uppercase tracking-widest transition-all duration-500">
                                                {service.linkText}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Border Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why USA Section - Modern Split Layout */}
            <section className="relative w-full overflow-hidden bg-brand-navy">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Image Half */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
                        <img 
                            src="/images/usa-hub.jpg" 
                            className="w-full h-full object-cover"
                            alt="USA Financial Hub"
                        />
                        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
                    </div>

                    {/* Content Half */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 bg-brand-navy relative">
                        {/* Decorative Badge */}
                        <div className="absolute top-0 right-0 p-12 opacity-10 hidden md:block">
                            <span className="text-[10rem] font-bold text-white select-none">USA</span>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10 max-w-lg"
                        >
                            <h2 className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6">Strategic Presence</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                                Why USA?
                            </h3>
                            <p className="text-slate-300 text-xl mb-12 leading-relaxed font-light">
                                Discover the benefits of the world's premier financial hub and a global center of excellence. Our New York headquarters serves as the bridge between international markets and absolute financial stability.
                            </p>
                            <Button className="bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none px-10 py-7 font-bold uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-brand-blue/20">
                                Explore the Hub
                                <ArrowRight className="w-5 h-5 ml-3" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
            
        </PublicLayout>
    );
}

