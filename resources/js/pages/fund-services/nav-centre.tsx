import { Head, Link, router } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Search } from 'lucide-react';
import { nav } from '@/routes/fund';

interface Fund {
    id: number;
    name: string;
    isin: string;
    ccy: string;
    date: string;
    price: string;
    last_price: string;
    change: string;
    yield: string;
}

interface PaginationProps {
    data: Fund[];
    current_page: number;
    last_page: number;
    total: number;
    from: number;
    to: number;
    links: { url: string | null; label: string; active: boolean }[];
}

interface NavCentreProps {
    funds: PaginationProps;
    filters: {
        search?: string;
        currency?: string;
        date?: string;
    };
    latestDate?: string;
}

export default function NavCentre({ funds, filters, latestDate }: NavCentreProps) {
    const [searchQuery, setSearchQuery] = useState(filters.search || "");
    const [currencyFilter, setCurrencyFilter] = useState(filters.currency || "All Currencies");
    const [dateFilter, setDateFilter] = useState(filters.date || latestDate || "");

    const handleFilterChange = () => {
        router.get(nav.url(), {
            search: searchQuery,
            currency: currencyFilter,
            date: dateFilter
        }, {
            preserveState: true,
            replace: true
        });
    };

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery !== (filters.search || "")) {
                handleFilterChange();
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Immediate change for select/date
    useEffect(() => {
        if (currencyFilter !== (filters.currency || "All Currencies") || dateFilter !== (filters.date || latestDate || "")) {
            handleFilterChange();
        }
    }, [currencyFilter, dateFilter]);

    return (
        <PublicLayout>
            <Head title="NAV Centre | United Cooperate Trust Bank" />

            {/* Breadcrumbs & Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-600 font-bold">Fund Services</span>
                    </nav>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-6xl font-bold text-brand-blue tracking-tight"
                    >
                        NAV Centre
                    </motion.h1>
                    <div className="w-24 h-1 bg-brand-blue mt-8" />
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full"
                    >
                        <div className="w-full">
                            {/* Date Filter (Hero Style) */}
                            <div className="mb-10">
                                <label className="block text-xl md:text-2xl font-bold text-black mb-4">Net Asset Value as of:</label>
                                <div className="max-w-[240px]">
                                    <input 
                                        type="date" 
                                        value={dateFilter}
                                        onChange={(e) => setDateFilter(e.target.value)}
                                        className="w-full border-0 border-b border-black px-0 py-2 text-2xl md:text-3xl text-slate-700 focus:border-brand-blue focus:ring-0 bg-transparent transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Table Controls */}
                            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 mb-6 bg-white p-4 shadow-sm border border-slate-100 rounded-sm">
                                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input 
                                            type="text" 
                                            placeholder="Search by Fund Name or ISIN..." 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full sm:w-72 border border-slate-200 pl-10 pr-4 py-2 text-sm focus:border-brand-blue focus:ring-0 rounded-sm"
                                        />
                                    </div>
                                    <select 
                                        value={currencyFilter}
                                        onChange={(e) => setCurrencyFilter(e.target.value)}
                                        className="border border-slate-200 px-4 py-2 text-sm focus:border-brand-blue focus:ring-0 rounded-sm bg-white"
                                    >
                                        <option value="All Currencies">All Currencies</option>
                                        <option value="EUR">EUR</option>
                                        <option value="USD">USD</option>
                                        <option value="GBP">GBP</option>
                                        <option value="RON">RON</option>
                                        <option value="BGN">BGN</option>
                                    </select>
                                </div>
                                <button className="px-6 py-2 bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors rounded-sm">
                                    Export CSV
                                </button>
                            </div>

                            {/* Data Table */}
                            <div className="bg-white border border-slate-200 shadow-xl overflow-x-auto rounded-sm">
                                <table className="w-full text-left border-collapse min-w-[1000px]">
                                    <thead>
                                        <tr className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                                            <th className="py-4 px-6 font-semibold">Name</th>
                                            <th className="py-4 px-6 font-semibold">ISIN</th>
                                            <th className="py-4 px-6 font-semibold">CCY</th>
                                            <th className="py-4 px-6 font-semibold text-right">Date</th>
                                            <th className="py-4 px-6 font-semibold text-right">Price</th>
                                            <th className="py-4 px-6 font-semibold text-right">Last Price</th>
                                            <th className="py-4 px-6 font-semibold text-right">Daily Charge</th>
                                            <th className="py-4 px-6 font-semibold text-right">Yield</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {funds.data.length > 0 ? (
                                            funds.data.map((row, i) => (
                                                <tr key={i} className="border-b border-slate-100 hover:bg-brand-blue/5 transition-colors even:bg-slate-50/50">
                                                    <td className="py-4 px-6 font-semibold text-brand-navy">{row.name}</td>
                                                    <td className="py-4 px-6 text-slate-500 font-mono text-xs">{row.isin}</td>
                                                    <td className="py-4 px-6 text-slate-600">{row.ccy}</td>
                                                    <td className="py-4 px-6 text-right text-slate-500">{new Date(row.date).toLocaleDateString('en-GB')}</td>
                                                    <td className="py-4 px-6 text-right font-mono font-medium text-slate-700">{row.price}</td>
                                                    <td className="py-4 px-6 text-right font-mono text-slate-500">{row.last_price}</td>
                                                    <td className={`py-4 px-6 text-right font-medium ${row.change.startsWith('-') || row.change === '0.0000' ? 'text-red-500' : 'text-green-600'}`}>
                                                        {row.change}
                                                    </td>
                                                    <td className={`py-4 px-6 text-right font-medium ${parseFloat(row.yield) < 0 ? 'text-red-500' : 'text-green-600'}`}>
                                                        {parseFloat(row.yield).toFixed(2)}%
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={8} className="py-12 px-6 text-center text-slate-500">
                                                    No funds found matching your current filters.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Controls */}
                            {funds.total > 0 && (
                                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-sm text-slate-500">
                                        Showing <span className="font-semibold text-brand-navy">{funds.from}</span> to <span className="font-semibold text-brand-navy">{funds.to}</span> of <span className="font-semibold text-brand-navy">{funds.total}</span> funds
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link 
                                            href={funds.links[0].url || '#'}
                                            as="button"
                                            disabled={!funds.links[0].url}
                                            className="p-2 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-sm"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </Link>
                                        
                                        {/* Page Numbers */}
                                        <div className="flex items-center">
                                            {funds.links.slice(1, -1).map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={link.url || '#'}
                                                    as="button"
                                                    className={`px-4 py-2 text-sm font-semibold border-y border-r border-slate-200 first:border-l ${link.active ? 'bg-brand-navy text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ))}
                                        </div>

                                        <Link 
                                            href={funds.links[funds.links.length - 1].url || '#'}
                                            as="button"
                                            disabled={!funds.links[funds.links.length - 1].url}
                                            className="p-2 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-sm"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                            
                            <div className="mt-8 text-xs text-slate-400 italic text-right">
                                * Data is updated daily. Past performance is not indicative of future results.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PublicLayout>
    );
}
