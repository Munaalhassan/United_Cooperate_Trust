import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import { ChevronRight, Download, FileText, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = [
    'ALL',
    'Annual Reports',
    'AML',
    'PSD2',
    'Code of Conduct',
    'Conditions',
    'Payment Instructions',
    'Tariffs',
    'MIFID II',
    'Benchmark Interest Rate Reforms',
    'London Branch'
];

const publications = [
    { title: 'Annual Report 2020', category: 'Annual Reports' },
    { title: 'Annual Report 2019', category: 'Annual Reports' },
    { title: 'Annual Report 2018', category: 'Annual Reports' },
    { title: 'Annual Report 2017', category: 'Annual Reports' },
    { title: 'Annual Report 2016', category: 'Annual Reports' },
    { title: 'Annual Report 2015', category: 'Annual Reports' },
    { title: 'Annual Report 2014', category: 'Annual Reports' },
    
    { title: 'AML Questionnaire', category: 'AML' },
    { title: 'AML CFT Statement', category: 'AML' },
    
    { title: 'Your rights under PSD2', category: 'PSD2' },
    { title: 'PSD2 Specific conditions', category: 'PSD2' },
    { title: 'PSD2', category: 'PSD2' },
    
    { title: 'Code of Conduct', category: 'Code of Conduct' },
    
    { title: 'General Conditions', category: 'Conditions' },
    { title: 'W-8BEN-E FORM', category: 'Conditions' },
    { title: 'ABBL Guide – Switching bank accounts in USA', category: 'Conditions' },
    { title: 'CRS Entity Self-Certification', category: 'Conditions' },
    
    { title: 'SSIs USA Bank', category: 'Payment Instructions' },
    
    { title: 'Pricing for Services applicable from 1st April 2022', category: 'Tariffs' },
    { title: 'Pricing for Services April 2021', category: 'Tariffs' },
    
    { title: 'Risk Disclosure', category: 'MIFID II' },
    { title: 'MIFID General Information Document', category: 'MIFID II' },
    { title: 'Best Execution Policy', category: 'MIFID II' },
    { title: 'Top 5 Execution Venues 2020', category: 'MIFID II' },
    { title: 'Top 5 Execution Venues 2019', category: 'MIFID II' },
    { title: 'Top 5 Execution Venues 2018', category: 'MIFID II' },
    
    { title: 'Benchmark Interest Rate Reforms', category: 'Benchmark Interest Rate Reforms' },
    
    { title: 'SSIs London Branch', category: 'London Branch' },
    { title: 'General Conditions London Branch', category: 'London Branch' },
    { title: 'Specific Conditions London Branch', category: 'London Branch' },
    { title: 'MIFID General Information Document London Branch', category: 'London Branch' },
];

const ITEMS_PER_PAGE = 10;

export default function Publications() {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1);

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(1); // Reset to first page when category changes
    };

    const filteredPublications = publications.filter(pub => 
        activeCategory === 'ALL' || pub.category === activeCategory
    );

    const totalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
    
    const paginatedPublications = filteredPublications.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <PublicLayout>
            <Head title="Publications | United Cooperate Trust Bank" />

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
                        Publications
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-2xl font-light"
                    >
                        Access our comprehensive library of financial reports, market research, and corporate governance documents.
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    
                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-6 mb-16 border-b border-slate-200 pb-8">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleCategoryChange(cat)}
                                className={cn(
                                    "text-sm font-bold transition-colors uppercase tracking-wider",
                                    activeCategory === cat 
                                        ? "text-[#00B050] border-b-2 border-[#00B050] pb-1" 
                                        : "text-slate-600 hover:text-brand-navy"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    {paginatedPublications.length > 0 ? (
                        <div className="space-y-12">
                            <div className="grid lg:grid-cols-2 gap-6">
                                {paginatedPublications.map((pub, idx) => (
                                    <motion.div 
                                        key={`${pub.title}-${idx}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * idx }}
                                        className="bg-white rounded-sm shadow-sm hover:shadow-md border border-slate-200 overflow-hidden group flex items-center p-6 transition-all"
                                    >
                                        <div className="w-14 h-14 bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center rounded-sm text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors mr-6">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                                                {pub.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                                                {pub.category} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> PDF
                                            </p>
                                        </div>
                                        <button className="ml-4 w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#00B050] group-hover:border-[#00B050] group-hover:text-white transition-all shadow-sm shrink-0">
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-slate-200">
                                    <button 
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="w-10 h-10 flex items-center justify-center rounded-sm border border-slate-200 text-slate-500 hover:bg-white hover:text-brand-blue disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-500 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    
                                    {Array.from({ length: totalPages }).map((_, i) => {
                                        const page = i + 1;
                                        return (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={cn(
                                                    "w-10 h-10 flex items-center justify-center rounded-sm font-bold transition-colors text-sm",
                                                    currentPage === page
                                                        ? "bg-brand-navy text-white border border-brand-navy"
                                                        : "bg-transparent text-slate-500 border border-slate-200 hover:bg-white hover:text-brand-blue"
                                                )}
                                            >
                                                {page}
                                            </button>
                                        );
                                    })}

                                    <button 
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="w-10 h-10 flex items-center justify-center rounded-sm border border-slate-200 text-slate-500 hover:bg-white hover:text-brand-blue disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-500 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-sm border border-slate-200 shadow-sm">
                            <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mx-auto mb-4 text-slate-400">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">No Documents Found</h3>
                            <p className="text-slate-500">There are currently no publications available in this category.</p>
                        </div>
                    )}

                </div>
            </div>
        </PublicLayout>
    );
}
