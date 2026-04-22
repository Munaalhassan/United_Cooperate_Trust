import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Monitor, 
    CreditCard, 
    ShieldCheck, 
    Share2, 
    Globe, 
    Mail, 
    MapPin
} from 'lucide-react';

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
        href: "/private-banking/investment-services",
        image: "/images/service-1.jpg",
        reverse: false
    },
    {
        title: "Corporate Banking",
        description: "Targeted products and services, expertly tailored to support your business plans.",
        linkText: "Explore",
        href: "/corporate-banking/payment-fx",
        image: "/images/service-2.jpg",
        reverse: true
    },
    {
        title: "Fund Services",
        description: "Our focus is on providing a customized and superior quality service to our clients based on long term relationships and a team with extensive experience and expertise.",
        linkText: "Read more",
        href: "/fund-services/fund-business",
        image: "/images/service-3.jpg",
        reverse: false
    },
    {
        title: "United Cooperate Trust Bank embraces Open Banking",
        description: "Get to know what PSD2 brings you!",
        linkText: "Find out more!",
        href: "/quick-services/e-banking-registration",
        image: "/images/service-4.jpg",
        reverse: true
    }
];

const quickServices = [
    {
        title: "E-Banking Registration",
        description: "Secure, real-time access to your wealth from any device, anywhere in the world.",
        icon: Monitor,
        linkText: "Register Now",
        href: "/quick-services/e-banking-registration"
    },
    {
        title: "Credit Cards",
        description: "Experience premium rewards and global recognition with our tailored card solutions.",
        icon: CreditCard,
        linkText: "Explore Cards",
        href: "/quick-services/credit-cards"
    },
    {
        title: "Security Awareness",
        description: "Your security is our priority. Learn about our advanced protection measures.",
        icon: ShieldCheck,
        linkText: "Stay Protected",
        href: "/quick-services/security-awareness"
    },
    {
        title: "Digital Integration",
        description: "Seamlessly connect with third-party payment services through secure API integration.",
        icon: Share2,
        linkText: "Learn More",
        href: "/quick-services/third-party-payments"
    }
];

const heritageStats = [
    { label: "Assets Under Management", value: "$42.5B+" },
    { label: "Years of Excellence", value: "25+" },
    { label: "Global Offices", value: "12" },
    { label: "Client Retention", value: "99.2%" }
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
                            <Link href="/private-banking/investment-services">
                                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm uppercase tracking-wider px-8 py-6 rounded-none flex items-center gap-2 group transition-all shadow-lg shadow-brand-blue/20">
                                    Discover Private Banking
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy font-bold text-sm uppercase tracking-wider px-8 py-6 rounded-none transition-all">
                                    Contact an Advisor
                                </Button>
                            </Link>
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
                                            <Link href={service.href}>
                                                <Button className="bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none px-8 py-6 font-bold uppercase tracking-widest transition-all duration-500">
                                                    {service.linkText}
                                                </Button>
                                            </Link>
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
                            <Link href="/about-us/why-usa">
                                <Button className="bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none px-10 py-7 font-bold uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-brand-blue/20">
                                    Explore the Hub
                                    <ArrowRight className="w-5 h-5 ml-3" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Digital Suite Section - Bento Grid Design */}
            <section className="py-40 bg-[#fdfdfd] relative overflow-hidden">
                {/* Micro-Typography Detail */}
                <div className="absolute top-20 left-10 hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
                        Digital Infrastructure / Vol. 2026
                    </span>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl"
                        >
                            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Innovation Hub</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-brand-navy tracking-tight leading-[0.95]">
                                The Future of <br />
                                <span className="text-brand-blue/80 italic font-light">Wealth</span> is Personal.
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/3 border-l-2 border-brand-blue/20 pl-8"
                        >
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Beyond the balance sheet, our digital tools are designed to provide absolute clarity, security, and control over your global portfolio.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[240px]"
                    >
                        {/* Main Digital Card */}
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="lg:col-span-8 lg:row-span-2 group relative overflow-hidden bg-brand-navy"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue/30" />
                            {/* Abstract Shape Overlay */}
                            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] group-hover:bg-brand-blue/20 transition-all duration-1000" />
                            
                            <div className="relative h-full p-12 md:p-16 flex flex-col justify-end">
                                <Monitor className="w-12 h-12 text-brand-blue mb-8" />
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">UCT Online Platform</h3>
                                <p className="text-slate-400 max-w-md mb-10 text-lg leading-relaxed">
                                    A unified ecosystem for your private, corporate, and investment accounts. Secure, intuitive, and borderless.
                                </p>
                                <Link href="/quick-services/e-banking-registration">
                                    <Button className="w-fit bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none px-10 py-7 font-bold uppercase tracking-widest transition-all">
                                        Enter Portal
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Security Card */}
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="lg:col-span-4 lg:row-span-1 p-10 bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/5 transition-all group"
                        >
                            <div className="flex justify-between items-start">
                                <ShieldCheck className="w-8 h-8 text-brand-blue" />
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Certified</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-brand-navy mb-2">Absolute Security</h4>
                                <p className="text-slate-500 text-sm">Military-grade encryption and biometric access protocols.</p>
                            </div>
                        </motion.div>

                        {/* Card Solutions */}
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="lg:col-span-4 lg:row-span-1 p-10 bg-brand-gold text-white flex flex-col justify-between group overflow-hidden relative"
                        >
                            <div className="absolute top-[-50%] right-[-50%] w-[200px] h-[200px] bg-white/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
                            <CreditCard className="w-8 h-8 mb-4 relative z-10" />
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2">Infinite Cards</h4>
                                <p className="text-white/80 text-sm mb-4">Request your bespoke UCT card with global limits.</p>
                                <Link href="/quick-services/credit-cards">
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Heritage & Trust Section - Human Centric */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="border-t border-slate-100 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-light italic text-slate-400 mb-12 leading-relaxed">
                                "Our bank was founded on a simple principle: that wealth is more than numbers. It is the legacy of families, the growth of businesses, and the fuel for global progress. We are honored to be your partner in this journey."
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-brand-blue" />
                                <span className="font-bold text-brand-navy uppercase tracking-[0.2em] text-xs">A Message from the CEO</span>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.4
                                    }
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-x-12 gap-y-16"
                        >
                            {heritageStats.map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2 tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Reach / Contact Section - Refined Split */}
            <section className="relative bg-brand-navy text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col lg:flex-row gap-24">
                    <div className="flex-1">
                        <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Global Reach</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight leading-[0.9]">
                            Expertise <br /> Without <br /> <span className="text-brand-blue">Borders.</span>
                        </h2>
                        
                        <div className="space-y-12">
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-1 h-8 bg-brand-blue group-hover:h-12 transition-all duration-500" />
                                    <h4 className="text-xl font-bold">Main Office</h4>
                                </div>
                                <p className="text-slate-400 text-sm max-w-sm ml-5">1256 - Butantã, São Paulo - SP, 05503-000, Germany</p>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-1 h-8 bg-brand-gold group-hover:h-12 transition-all duration-500" />
                                    <h4 className="text-xl font-bold">Regulated by CSSF</h4>
                                </div>
                                <p className="text-slate-400 text-sm max-w-sm ml-5">Supervised by the Commission de Surveillance du Secteur Financier — 283 Route d'Arlon, L-1150 USA.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div 
                        className="flex-1 bg-[#152e4d] p-12 md:p-16 rounded-3xl relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
                        <h3 className="text-2xl font-bold mb-12">Start a conversation.</h3>
                        
                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brand-blue transition-all">
                                    <Mail className="w-5 h-5 text-brand-blue group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">General Inquiries</div>
                                    <p className="text-base font-medium">info@unitedcooperatetrust.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brand-blue transition-all">
                                    <Mail className="w-5 h-5 text-brand-blue group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Customer Service</div>
                                    <p className="text-base font-medium">customerservice@unitedcooperatetrust.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brand-gold transition-all">
                                    <Mail className="w-5 h-5 text-brand-gold group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Loan Inquiries</div>
                                    <p className="text-base font-medium">loan@unitedcooperatetrust.com</p>
                                </div>
                            </div>
                            <Link href="/contact" className="block mt-6">
                                <Button className="w-full bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none py-8 font-bold uppercase tracking-[0.2em] transition-all duration-500 text-xs">
                                    Request a Call Back
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PublicLayout>
    );
}

