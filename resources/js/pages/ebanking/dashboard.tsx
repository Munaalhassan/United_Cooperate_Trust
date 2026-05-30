import React from 'react';
import { Head, usePage, router, Link } from '@inertiajs/react';
import { Shield, CreditCard, Activity, ArrowRightLeft, Loader2, LogOut, FileText, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface User {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    account_number: string | null;
}

export default function Dashboard() {
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const user = auth.user;
    const [generating, setGenerating] = React.useState(false);

    const handleGenerate = () => {
        setGenerating(true);
        router.post('/ebanking/generate-account', {}, {
            onFinish: () => setGenerating(false),
            preserveScroll: true
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
            <Head title="E-Banking Dashboard | Prestige Trust Bank" />
            
            <header className="bg-brand-navy shadow-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8 text-brand-gold" />
                        <h1 className="text-xl font-extrabold text-white uppercase tracking-widest">Prestige Trust Bank</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest hidden md:inline-block">
                            Welcome, {user?.first_name || user?.name}
                        </span>
                        <div className="h-10 w-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-extrabold shadow-lg">
                            {(user?.first_name?.[0] || user?.name?.[0] || 'P').toUpperCase()}
                        </div>
                        <button onClick={() => router.post('/logout')} className="text-slate-400 hover:text-white transition">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-10">
                {/* Sidebar */}
                <aside className="w-full md:w-64 space-y-2">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4">
                        <nav className="space-y-1">
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-brand-navy/5 text-brand-navy dark:text-brand-gold rounded-md font-bold text-sm tracking-wide">
                                <Activity className="w-5 h-5" /> Dashboard
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-brand-navy transition rounded-md font-medium text-sm tracking-wide">
                                <UserIcon className="w-5 h-5" /> My Profile
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-brand-navy transition rounded-md font-medium text-sm tracking-wide">
                                <FileText className="w-5 h-5" /> Statements
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {!user.account_number ? (
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                            <div className="w-20 h-20 bg-brand-navy/5 rounded-full flex items-center justify-center mb-6">
                                <Shield className="w-10 h-10 text-brand-navy" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome to Prestige Trust Bank</h2>
                            <p className="text-slate-500 mb-8 max-w-md">
                                Hi {user.first_name || user.name}, your application is approved! Click below to instantly generate your official account number and dispatch it to your email.
                            </p>
                            
                            <Button 
                                onClick={handleGenerate}
                                disabled={generating}
                                className="h-14 px-8 bg-brand-navy hover:bg-brand-navy/90 text-white uppercase tracking-widest font-bold shadow-lg"
                            >
                                {generating ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <CreditCard className="w-5 h-5 mr-2" />}
                                {generating ? 'GENERATING...' : 'GENERATE ACCOUNT NUMBER'}
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Account Balance Card */}
                            <div className="bg-brand-navy rounded-xl p-8 text-white shadow-xl relative overflow-hidden border border-brand-navy/20">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-brand-gold">
                                    <Shield size={160} />
                                </div>
                                <h2 className="text-brand-gold/80 font-medium mb-1 uppercase tracking-widest text-xs">Total Balance</h2>
                                <div className="text-5xl font-light mb-8 text-white">$0.00</div>
                                
                                <div className="flex justify-between items-end border-t border-white/10 pt-6">
                                    <div>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">Account Number</p>
                                        <p className="font-mono text-xl tracking-[0.2em] text-brand-gold">{user.account_number}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/30 transition px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                                            <ArrowRightLeft size={14} /> Transfer
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6 uppercase tracking-widest text-xs">Quick Actions</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-brand-navy hover:text-white transition group border border-slate-200 dark:border-slate-600">
                                            <CreditCard className="text-brand-navy group-hover:text-brand-gold mb-3 transition-transform w-6 h-6" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-600 group-hover:text-white dark:text-slate-300">Cards</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-brand-navy hover:text-white transition group border border-slate-200 dark:border-slate-600">
                                            <Activity className="text-brand-navy group-hover:text-brand-gold mb-3 transition-transform w-6 h-6" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-600 group-hover:text-white dark:text-slate-300">Activity</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
                                    <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs">Recent Transactions</h3>
                                    </div>
                                    <div className="flex-1 p-6 text-center text-slate-500 flex flex-col items-center justify-center min-h-[200px]">
                                        <Activity size={32} className="text-slate-300 mb-4" />
                                        <p className="text-sm font-medium">No recent transactions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
