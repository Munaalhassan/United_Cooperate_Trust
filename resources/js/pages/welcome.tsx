import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, TrendingUp, Globe2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Original skyscraper
    "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2070&auto=format&fit=crop", // Corporate board meeting
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"  // Professional working on laptop
];

export default function Welcome() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Slide every 5 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <PublicLayout>
            <Head title="Welcome to United Cooperate Bank" />

            {/* Hero Section */}
            <div className="relative bg-brand-navy overflow-hidden">
                {/* Image Slider Component */}
                {heroImages.map((image, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 bg-cover bg-center mix-blend-overlay transition-opacity duration-1000 ease-in-out ${
                            idx === currentImageIndex ? 'opacity-30' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url('${image}')` }}
                    ></div>
                ))}
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 relative z-10 flex flex-col items-center text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 text-brand-green font-medium text-sm mb-6 border border-brand-green/30">
                        Global Excellence in Banking
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl">
                        Secure Your Legacy With <span className="text-brand-green">Confidence</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed text-center">
                        Experience world-class private and corporate banking tailored to your unique lifecycle. We build lasting partnerships founded on trust, vision, and sustainable growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-brand-green hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md shadow-lg shadow-brand-green/20">
                            Partner With Us
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-6 text-lg rounded-md bg-transparent">
                            Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Feature Highlights */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 -mt-40 relative z-20">
                    <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
                            <ShieldCheck className="w-7 h-7 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Uncompromising Security</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Your assets are protected by industry-leading security protocols and robust governance frameworks, giving you absolute peace of mind.
                        </p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:-translate-y-1 duration-300 delay-100">
                        <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
                            <TrendingUp className="w-7 h-7 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Growth</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Leverage our global insights and expert advisory to scale your business and optimize your personal wealth generation efficiently.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:-translate-y-1 duration-300 delay-200">
                        <div className="w-14 h-14 bg-brand-navy text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
                            <Globe2 className="w-7 h-7 text-brand-green" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Global Perspective</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Access international markets and sustainable finance options tailored for modern, forward-thinking enterprises and institutions.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">Ready to elevate your banking experience?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Join the institutions and individuals who trust United Cooperate Bank to manage their financial future.</p>
                    <Button className="bg-brand-navy hover:bg-slate-800 text-white px-8 py-5">
                        Open an Account Today
                    </Button>
                </div>
            </div>
        </PublicLayout>
    );
}
