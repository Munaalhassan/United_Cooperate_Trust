import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { motion } from 'framer-motion';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FundServicesSidebar } from '@/components/fund-services-sidebar';

export default function FundBusiness() {
    return (
        <PublicLayout>
            <Head title="Fund Business | United Cooperate Trust Bank" />

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
                        Fund Business
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
                        {/* Featured Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 mb-16 shadow-2xl group">
                            <img 
                                src="/images/slider_wealth.png" 
                                alt="UCT Fund Business" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-navy/10" />
                        </div>

                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Personal Loan Services</h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-12">
                                <p>
                                    We are pleased to introduce the personal loan services offered by United Cooperate Trust Bank. As a retail banking institution, we understand the diverse financial needs of individuals like yourself and strive to provide tailored solutions to meet your requirements.
                                </p>
                                <p>
                                    Our personal loan offerings are designed to assist you in achieving your goals and managing your finances effectively. Whether you need funds for consolidating your debts, financing a major purchase, covering unexpected expenses, or pursuing personal projects, we have a range of loan options to suit your specific needs.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-brand-navy mb-8">Types of Individual Loans</h3>
                                <div className="space-y-8">
                                    {[
                                        { title: "1. Unsecured Personal Loans", desc: "These loans do not require any collateral and are based on your creditworthiness. They provide you with the flexibility to use the funds for various purposes, such as home renovations, education expenses, or travel." },
                                        { title: "2. Debt Consolidation Loans", desc: "If you have multiple debts with different interest rates, our debt consolidation loans can help simplify your financial obligations. By combining your debts into a single loan, you can potentially lower your interest rate and manage your payments more efficiently." },
                                        { title: "3. Co-signed and Joint Loans", desc: "We offer loans that allow you to involve a co-signer or multiple borrowers, such as a spouse or family member. Co-signed and joint loans can enhance your eligibility and provide you with better loan terms." },
                                        { title: "4. Fixed-Rate Loans", desc: "With our fixed-rate loans, you can enjoy the stability of a consistent interest rate throughout the loan term. This means your monthly payments will remain the same, allowing you to budget effectively." },
                                        { title: "5. Variable-Rate Loans", desc: "Our variable-rate loans offer flexibility as the interest rate may fluctuate based on market conditions. This type of loan can be beneficial if you anticipate interest rates to decrease, potentially reducing your overall interest costs." },
                                        { title: "6. Personal Line of Credit", desc: "We provide personal lines of credit that give you access to a predetermined credit limit. You can withdraw funds as needed and only pay interest on the amount you use. It's a convenient option for managing short-term expenses or unexpected financial needs." }
                                    ].map((loan, idx) => (
                                        <div key={idx} className="bg-white p-6 border border-slate-100 shadow-sm border-l-4 border-l-brand-blue">
                                            <h4 className="text-lg font-bold text-brand-navy mb-2">{loan.title}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{loan.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-16">
                                <p>
                                    To explore these loan options further and take the next step towards securing the funds you require, we encourage you to reach out to our dedicated loan specialists. They will guide you through the application process, answer your questions, and ensure that you receive personalized assistance.
                                </p>
                                <p>
                                    At United Cooperate Trust Bank, we are committed to providing you with competitive interest rates, flexible repayment terms, and exceptional customer service. Your financial well-being is our priority, and we look forward to supporting you in achieving your goals.
                                </p>
                            </div>

                            {/* Loan Application Form */}
                            <div className="bg-white border border-slate-200 shadow-xl p-8 md:p-12 mb-20">
                                <h3 className="text-2xl font-bold text-brand-navy mb-4">Loan Application Form</h3>
                                <p className="text-slate-600 mb-8">
                                    Kindly fill the loan application form below and an agent will contact you shortly.<br /><br />
                                    For more information, please send an email to <a href="mailto:loan@unitedcooperatetrust.com" className="font-bold text-brand-navy hover:text-brand-blue transition-colors">loan@unitedcooperatetrust.com</a> or call us at <span className="font-bold text-brand-navy">+4832231537</span>.
                                </p>

                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-6">
                                        {/* Input fields mimicking the reference image style */}
                                        <div className="relative">
                                            <input type="text" id="firstName" placeholder="First Name" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>
                                        <div className="relative">
                                            <input type="text" id="lastName" placeholder="Last Name" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>
                                        <div className="relative">
                                            <input type="email" id="email" placeholder="Email" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>
                                        <div className="relative">
                                            <input type="tel" id="phone" placeholder="Phone" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>

                                        <div className="relative pt-4">
                                            <label className="block text-sm font-semibold text-slate-600 mb-1">Gender</label>
                                            <select className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent font-medium cursor-pointer">
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div className="relative pt-4">
                                            <label className="block text-sm font-semibold text-slate-600 mb-1">Marital status</label>
                                            <select className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent font-medium cursor-pointer">
                                                <option>Single</option>
                                                <option>Married</option>
                                                <option>Divorced</option>
                                                <option>Widowed</option>
                                            </select>
                                        </div>

                                        <div className="relative pt-4">
                                            <label className="block text-sm font-semibold text-slate-600 mb-1">DOB</label>
                                            <input type="date" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent font-medium" />
                                        </div>

                                        <div className="relative pt-4">
                                            <input type="text" placeholder="Desired loan amount" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>

                                        <div className="relative">
                                            <input type="text" placeholder="Annual Income" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>

                                        <div className="relative pt-4">
                                            <label className="block text-sm font-semibold text-slate-600 mb-1">What will the loan be used for?</label>
                                            <select className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent font-medium cursor-pointer">
                                                <option>Business Launching</option>
                                                <option>Debt Consolidation</option>
                                                <option>Home Renovation</option>
                                                <option>Education</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div className="relative pt-4">
                                            <input type="text" placeholder="Job title" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>

                                        <div className="relative">
                                            <input type="text" placeholder="Employer Name" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>

                                        <div className="relative">
                                            <input type="text" placeholder="Home Address" className="w-full border-0 border-b border-slate-300 focus:border-brand-blue focus:ring-0 px-0 py-2 text-slate-700 bg-transparent placeholder-slate-500 font-medium transition-colors" />
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button type="submit" className="px-6 py-2 bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-800 font-medium transition-colors">
                                            Request
                                        </button>
                                        <button type="reset" className="px-6 py-2 bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-800 font-medium transition-colors">
                                            Clear
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    <FundServicesSidebar />
                </div>
            </div>
        </PublicLayout>
    );
}
