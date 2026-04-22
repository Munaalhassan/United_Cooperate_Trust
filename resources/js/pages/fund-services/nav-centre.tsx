import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FundServicesSidebar } from '@/components/fund-services-sidebar';

export default function NavCentre() {
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

            {/* Main Content Split */}
            <div className="bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-20">
                    
                    {/* Left Column - Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1"
                    >
                        <div className="max-w-[1000px] w-full">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">NAV Centre</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-12">
                                <p>
                                    Welcome to the NAV Centre. Here you can find the most recent Net Asset Value (NAV) calculations and performance metrics for our monitored funds.
                                </p>
                            </div>

                            {/* Table Controls */}
                            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 mb-6 bg-white p-4 shadow-sm border border-slate-100">
                                <div className="w-full sm:w-auto flex gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Search by Fund Name..." 
                                        className="w-full sm:w-64 border border-slate-200 px-4 py-2 text-sm focus:border-brand-blue focus:ring-0"
                                    />
                                    <select className="border border-slate-200 px-4 py-2 text-sm focus:border-brand-blue focus:ring-0">
                                        <option>All Currencies</option>
                                        <option>EUR</option>
                                        <option>USD</option>
                                        <option>GBP</option>
                                    </select>
                                </div>
                                <button className="px-6 py-2 bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors">
                                    Export CSV
                                </button>
                            </div>

                            {/* Data Table */}
                            <div className="bg-white border border-slate-200 shadow-xl overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                                            <th className="py-4 px-6 font-semibold">Fund Name</th>
                                            <th className="py-4 px-6 font-semibold">ISIN</th>
                                            <th className="py-4 px-6 font-semibold">CCY</th>
                                            <th className="py-4 px-6 font-semibold text-right">NAV</th>
                                            <th className="py-4 px-6 font-semibold text-right">Date</th>
                                            <th className="py-4 px-6 font-semibold text-right">Change (%)</th>
                                            <th className="py-4 px-6 font-semibold text-right">YTD (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {[
                                            { name: "Global Equity Select", isin: "LU1234567890", ccy: "EUR", nav: "145.67", date: "21.04.2026", change: "+0.45", ytd: "+5.20" },
                                            { name: "Strategic Bond Fund", isin: "LU1234567891", ccy: "USD", nav: "102.34", date: "21.04.2026", change: "-0.12", ytd: "+1.15" },
                                            { name: "European Real Estate", isin: "LU1234567892", ccy: "EUR", nav: "1,250.00", date: "21.04.2026", change: "+0.00", ytd: "+3.45" },
                                            { name: "Emerging Markets High Yield", isin: "LU1234567893", ccy: "USD", nav: "89.45", date: "21.04.2026", change: "+1.20", ytd: "+8.90" },
                                            { name: "Sustainable Future ESG", isin: "LU1234567894", ccy: "EUR", nav: "115.80", date: "21.04.2026", change: "+0.30", ytd: "+6.10" },
                                            { name: "UK Dividend Aristocrats", isin: "GB00B1234567", ccy: "GBP", nav: "13.45", date: "21.04.2026", change: "-0.50", ytd: "-1.20" },
                                            { name: "Tech Innovators Fund", isin: "US1234567890", ccy: "USD", nav: "340.12", date: "21.04.2026", change: "+2.15", ytd: "+14.50" },
                                            { name: "Global Infrastructure", isin: "LU1234567895", ccy: "EUR", nav: "108.90", date: "21.04.2026", change: "+0.10", ytd: "+4.30" },
                                            { name: "Asian Growth Opportunities", isin: "LU1234567896", ccy: "USD", nav: "175.60", date: "21.04.2026", change: "-0.80", ytd: "+2.10" },
                                            { name: "Precious Metals & Mining", isin: "LU1234567897", ccy: "USD", nav: "95.20", date: "21.04.2026", change: "+1.80", ytd: "+11.40" },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-slate-100 hover:bg-brand-blue/5 transition-colors even:bg-slate-50/50">
                                                <td className="py-4 px-6 font-semibold text-brand-navy">{row.name}</td>
                                                <td className="py-4 px-6 text-slate-500 font-mono text-xs">{row.isin}</td>
                                                <td className="py-4 px-6 text-slate-600">{row.ccy}</td>
                                                <td className="py-4 px-6 text-right font-mono font-medium text-slate-700">{row.nav}</td>
                                                <td className="py-4 px-6 text-right text-slate-500">{row.date}</td>
                                                <td className={`py-4 px-6 text-right font-medium ${row.change.startsWith('+') ? 'text-green-600' : row.change.startsWith('-') ? 'text-red-500' : 'text-slate-600'}`}>
                                                    {row.change}%
                                                </td>
                                                <td className={`py-4 px-6 text-right font-medium ${row.ytd.startsWith('+') ? 'text-green-600' : row.ytd.startsWith('-') ? 'text-red-500' : 'text-slate-600'}`}>
                                                    {row.ytd}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="mt-4 text-xs text-slate-400 italic text-right">
                                * Data is updated daily. Past performance is not indicative of future results.
                            </div>
                        </div>

                    </motion.div>

                    <FundServicesSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
