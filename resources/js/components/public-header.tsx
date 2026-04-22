import { Link } from '@inertiajs/react';
import { Mail, MapPin, Phone, Search, Globe, ChevronRight, Menu, ChevronDown, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

// Extracted Navigation Data
const navigationData = [
    {
        title: 'HOME',
        href: '/',
        isLink: true
    },
    {
        title: 'ABOUT US',
        description: 'Our personalised approach is rooted in strong values and a tradition of excellence.',
        width: '650px',
        align: 'left',
        links: [
            { name: 'CEO welcome', href: '/about-us/ceo-welcome' },
            { name: 'Our Bank', href: '/about-us/our-bank' },
            { name: 'Governance', href: '/about-us/governance' },
            { name: 'Why USA ?', href: '/about-us/why-usa' },
            { name: 'Our London branch', href: '/about-us/london-branch' },
            { name: 'Human Resources', href: '/about-us/human-resources' }
        ]
    },
    {
        title: 'PRIVATE BANKING',
        description: 'A lifelong relationship based on personal attention, trust and leading expertise.',
        width: '600px',
        align: 'center',
        links: [
            { name: 'Investment Services', href: '/private-banking/investment-services' },
            { name: 'Credit Solutions', href: '/private-banking/credit-solutions' },
            { name: 'Family Office', href: '/private-banking/family-office' }
        ]
    },
    {
        title: 'CORPORATE BANKING',
        description: 'Targeted products and services, expertly tailored to support your business plans.',
        width: '700px',
        align: 'center',
        links: [
            { name: 'Payment and FX services', href: '/corporate-banking/payment-fx' },
            { name: 'Trade Finance Services', href: '/corporate-banking/trade-finance' },
            { name: 'Business Credit Cards', href: '/corporate-banking/business-cards' },
            { name: 'Corporate Financing through the Globafin Group', href: '/corporate-banking/corporate-financing' }
        ]
    },
    {
        title: 'FUND SERVICES',
        description: 'Our focus is on providing a customized and superior quality service to our clients based on long term relationships and a team with extensive experience and expertise.',
        width: '550px',
        align: 'right', // To prevent overflow off the right edge of the screen
        links: [
            { name: 'Fund Business', href: '/fund-services/fund-business' },
            { name: 'NAV Centre', href: '/fund-services/nav-centre' }
        ]
    }
];

// Mobile Accordion Component
const MobileMenuItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    if (item.isLink) {
        return (
            <Link 
                href={item.href}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-bold text-brand-navy hover:bg-slate-50 transition-colors uppercase tracking-widest text-left border-b border-slate-100 last:border-0"
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div className="border-b border-slate-100 last:border-0 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-bold text-brand-navy hover:bg-slate-50 transition-colors uppercase tracking-widest text-left"
            >
                {item.title}
                <ChevronDown className={cn("w-4 h-4 text-brand-blue transition-transform duration-300", isOpen && "-rotate-180")} />
            </button>
            <div className={cn("bg-slate-50 transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0")}>
                {item.description && <p className="px-6 text-xs text-slate-500 mb-3 italic">{item.description}</p>}
                <div className="flex flex-col gap-2">
                    {item.links?.map((link: any, idx: number) => (
                        <Link key={idx} href={link.href} className="px-6 py-1.5 text-sm font-semibold text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-transform flex items-center">
                            <span className="w-1 h-1 rounded-full bg-brand-blue mr-2"></span>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export function PublicHeader() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    
    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'PL', name: 'Polish' },
        { code: 'FR', name: 'French' },
        { code: 'DE', name: 'German' },
        { code: 'ES', name: 'Spanish' },
        { code: 'AR', name: 'Arabic' },
        { code: 'ZH', name: 'Chinese' },
        { code: 'JA', name: 'Japanese' },
        { code: 'RU', name: 'Russian' }
    ];

    const handleLanguageChange = (langName: string) => {
        setSelectedLanguage(langName);
        // Google Translate logic
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
            select.value = langName;
            select.dispatchEvent(new Event('change'));
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsSearchOpen(false);
        };
        if (isSearchOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isSearchOpen]);

    return (
        <>
            <header className="w-full flex flex-col isolation-auto relative z-50">
                {/* Top Utility Bar */}
            <div className="bg-[#f0f0f0] text-slate-600 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">
                     <div className="relative group/lang hidden md:flex items-center gap-1 cursor-pointer hover:text-brand-blue text-xs font-medium h-full">
                        <Globe className="w-3.5 h-3.5 mr-1" />
                        <span>{selectedLanguage}</span>
                        <ChevronDown className="w-3 h-3 group-hover/lang:-rotate-180 transition-transform duration-300" />
                        
                        <div className="absolute top-full left-0 min-w-[140px] bg-white border border-gray-200 shadow-xl opacity-0 invisible scale-95 -translate-y-2 group-hover/lang:opacity-100 group-hover/lang:visible group-hover/lang:scale-100 group-hover/lang:translate-y-0 transition-all duration-300 ease-out z-[100] py-2 rounded-md">
                            {languages.map((lang) => (
                                <button 
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.name)}
                                    className={cn(
                                        "w-full text-left px-5 py-2.5 text-sm transition-colors flex items-center justify-between",
                                        selectedLanguage === lang.name 
                                            ? "bg-brand-blue/10 text-brand-blue font-bold" 
                                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                                    )}
                                >
                                    {lang.name}
                                    <span className="text-[10px] text-slate-400 font-bold">{lang.code}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                        <div className="flex items-center justify-end w-full md:w-auto gap-4 md:gap-6 static z-50">
                            {/* Quick Services */}
                            <div className="relative group/qs h-full flex items-center">
                                <span className="flex items-center gap-1 hover:text-brand-blue transition-colors text-[13px] font-semibold cursor-pointer h-full py-2">
                                    Quick Services <ChevronDown className="w-3 h-3 group-hover/qs:-rotate-180 transition-transform duration-300" />
                                </span>
                                <div className="absolute top-full right-0 min-w-[230px] bg-white border border-gray-200 shadow-xl opacity-0 invisible scale-95 translate-y-2 group-hover/qs:opacity-100 group-hover/qs:visible group-hover/qs:scale-100 group-hover/qs:translate-y-0 transition-all duration-300 ease-out z-[100] py-2 rounded-md">
                                    <Link href="/quick-services/e-banking-registration" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-colors">E-Banking Registration</Link>
                                    <Link href="/quick-services/credit-cards" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-colors">Credit Cards</Link>
                                    <Link href="/quick-services/security-awareness" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-colors">Security Awareness</Link>
                                    <Link href="/quick-services/third-party-payments" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-colors">Third-Party Payment Services</Link>
                                </div>
                            </div>

                            {/* Media */}
                            <div className="relative group/media h-full flex items-center">
                                <span className="flex items-center gap-1 hover:text-brand-blue transition-colors text-[13px] font-semibold cursor-pointer h-full py-2">
                                    Media <ChevronDown className="w-3 h-3 group-hover/media:-rotate-180 transition-transform duration-300" />
                                </span>
                                <div className="absolute top-full right-0 min-w-[200px] bg-white border border-gray-200 shadow-xl opacity-0 invisible scale-95 translate-y-2 group-hover/media:opacity-100 group-hover/media:visible group-hover/media:scale-100 group-hover/media:translate-y-0 transition-all duration-300 ease-out z-[100] py-2 rounded-md">
                                    <Link href="/media/news-events" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-colors">News and Events</Link>
                                    <Link href="/media/publications" className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-colors">Publications</Link>
                                </div>
                            </div>

                            <Link href="/contact" className="hover:text-brand-blue transition-colors font-semibold text-[13px]">Contact us</Link>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] sticky top-0 relative z-40 relative">
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[85px]">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 -ml-2">
                            <img 
                                src="/images/logo.png" 
                                alt="United Cooperate Bank" 
                                className="h-[75px] lg:h-[90px] w-auto drop-shadow-sm transition-transform hover:scale-105 duration-300 logo-recolored" 
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center h-full">
                            <div className="flex h-full items-center gap-1 xl:gap-3">

                                {navigationData.map((item, index) => (
                                    <div key={index} className="relative group/nav h-full flex items-center">
                                        {/* Trigger */}
                                        {item.isLink ? (
                                            <Link href={item.href || '#'} className="px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-brand-navy hover:text-brand-blue transition-colors tracking-wide h-full flex items-center">
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <span className="px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-brand-navy group-hover/nav:text-brand-blue transition-colors tracking-wide cursor-pointer flex items-center gap-1 h-full">
                                                {item.title}
                                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/nav:text-brand-blue transition-transform duration-300 group-hover/nav:-rotate-180" />
                                            </span>
                                        )}

                                        {/* Mega Menu Dropdown */}
                                        {!item.isLink && item.links && (
                                            <div
                                                className={cn(
                                                    "absolute top-full mt-1 opacity-0 invisible scale-[0.98] -translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:scale-100 group-hover/nav:translate-y-0 transition-all duration-300 ease-out z-50",
                                                    item.align === 'center' ? "left-1/2 -translate-x-1/2" : 
                                                    item.align === 'right' ? "right-3 xl:right-4" : "left-3 xl:left-4"
                                                )}
                                                style={{ width: item.width }}
                                            >
                                                {/* Hover Bridge */}
                                                <div className="h-6 w-full bg-transparent absolute -top-5 left-0"></div>

                                                {/* Dropdown Content Box */}
                                                <div className="border-t-[3px] border-t-brand-blue bg-white shadow-2xl rounded-b-xl flex overflow-hidden ring-1 ring-slate-900/5">
                                                    {/* Description Panel */}
                                                    <div className="w-[45%] bg-brand-blue/5 p-8 border-r border-slate-100 flex flex-col justify-center">
                                                        <h3 className="text-lg font-extrabold text-brand-blue mb-3 leading-tight tracking-wide">{item.title}</h3>
                                                        <p className="text-[13px] text-slate-600 mb-6 leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                        <Link href="#" className="inline-flex items-center gap-1 font-bold text-brand-blue text-sm hover:text-brand-navy transition-colors self-start group/btn">
                                                            Learn more
                                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                        </Link>
                                                    </div>

                                                    {/* Links Grid Panel */}
                                                    <div className="w-[55%] p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 content-start">
                                                        {item.links.map((link, linkIdx) => (
                                                            <Link key={linkIdx} href={link.href} className="font-semibold text-[13px] text-slate-700 hover:text-brand-blue transition-all hover:translate-x-1.5 flex items-center">
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3 lg:gap-5">
                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hover:text-brand-blue hidden sm:flex text-slate-800">
                                <Search className="w-[18px] h-[18px] font-bold" />
                            </Button>
                            <Link href="/login" className="hidden sm:block">
                                <Button className="bg-brand-navy hover:bg-[#2c3e50] text-white font-bold px-7 py-[22px] rounded-md transition-all active:scale-95 text-[14px] tracking-widest shadow-md">
                                    E-BANKING
                                </Button>
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <div className="lg:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon" className="text-slate-800 hover:text-brand-blue">
                                            <Menu className="w-8 h-8" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-[85vw] sm:w-[400px] bg-white border-l shadow-2xl p-0 flex flex-col">
                                        <SheetHeader className="px-6 py-5 border-b border-slate-100 flex justify-between items-center flex-row">
                                            <img src="/images/logo.png" alt="United Cooperate Bank" className="h-8 w-auto" />
                                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                        </SheetHeader>
                                        <div className="flex-1 overflow-y-auto w-full">
                                            <div className="flex flex-col gap-0 py-2">
                                                {navigationData.map((item, index) => (
                                                    <MobileMenuItem key={index} item={item} />
                                                ))}

                                                <div className="mt-8 px-6 flex flex-col gap-3 pb-8">
                                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Utility Links</h4>
                                                    <Link href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors flex items-center justify-between">Quick Services <ChevronRight className="w-4 h-4 opacity-50" /></Link>
                                                    <div className="h-px bg-slate-100 w-full my-1"></div>
                                                    <Link href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors flex items-center justify-between">Media <ChevronRight className="w-4 h-4 opacity-50" /></Link>
                                                    <div className="h-px bg-slate-100 w-full my-1"></div>
                                                    <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors flex items-center justify-between">Contact Us <ChevronRight className="w-4 h-4 opacity-50" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 border-t border-slate-100 bg-slate-50">
                                            <Link href="/login" className="block w-full">
                                                <Button className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-6 rounded-md transition-all text-sm tracking-widest">
                                                    E-BANKING SECURE LOGIN
                                                </Button>
                                            </Link>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Fullscreen Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[100] bg-brand-navy/90 backdrop-blur-xl flex flex-col pt-[15vh] px-4 animate-in fade-in duration-300">
                    {/* Background Click to Close */}
                    <div className="absolute inset-0 cursor-pointer" onClick={() => setIsSearchOpen(false)}></div>

                    <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-10 animate-in slide-in-from-top-16 duration-500 ease-out">

                        <div className="flex justify-between items-end border-b-2 border-white/20 pb-4">
                            <h2 className="text-brand-blue font-bold tracking-widest text-sm uppercase">Site Search</h2>
                            <button onClick={() => setIsSearchOpen(false)} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                                Close <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex items-center gap-6">
                            <Search className="w-10 h-10 text-white/40" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full bg-transparent border-0 outline-none text-white text-4xl sm:text-5xl md:text-6xl font-light placeholder:text-white/20 px-0"
                            />
                        </div>

                        <div className="pt-8 pl-16">
                            <h4 className="text-white/50 font-bold text-xs tracking-widest uppercase mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-white/20 block"></span> Quick Links
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                {['Open an Account', 'Current Interest Rates', 'Corporate Loans', 'Internet Banking Setup', 'Wealth Management', 'Contact Support'].map((term, i) => (
                                    <button key={i} className="px-6 py-2.5 bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-slate-200 text-sm font-medium rounded-full transition-all cursor-pointer drop-shadow-md">
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
