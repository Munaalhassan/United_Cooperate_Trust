import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    LayoutDashboard, 
    Users, 
    FileText, 
    Settings, 
    ShieldCheck, 
    LogOut,
    TrendingUp,
    AlertCircle,
    Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-sans">
            <Head title="Admin Management | United Cooperate Trust Bank" />

            {/* Sidebar */}
            <aside className="w-64 bg-brand-navy text-white flex flex-col fixed inset-y-0 shadow-2xl">
                <div className="p-8 border-b border-white/5">
                    <img 
                        src="/images/logo.png" 
                        alt="UCT Bank Admin" 
                        className="h-8 w-auto brightness-0 invert" 
                    />
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3" /> System Admin
                    </div>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-sm font-medium text-sm transition-all group">
                        <LayoutDashboard className="w-4 h-4 text-brand-blue" /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-sm font-medium text-sm transition-all group">
                        <Users className="w-4 h-4" /> User Management
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-sm font-medium text-sm transition-all group">
                        <FileText className="w-4 h-4" /> Content Management
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white rounded-sm font-medium text-sm transition-all group">
                        <Settings className="w-4 h-4" /> Global Settings
                    </a>
                </nav>

                <div className="p-6 border-t border-white/5">
                    <a href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all text-sm font-medium">
                        <LogOut className="w-4 h-4" /> Back to Website
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 flex flex-col">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
                    <h1 className="text-xl font-bold text-brand-navy">System Overview</h1>
                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-brand-navy transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-blue rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right">
                                <div className="text-sm font-bold text-brand-navy">Admin User</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Access</div>
                            </div>
                            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                                AU
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-10 max-w-7xl">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Transactions</span>
                                <TrendingUp className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div className="text-3xl font-bold text-brand-navy">$242.5M</div>
                            <div className="mt-2 text-xs text-emerald-600 font-medium">+12.4% from last month</div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Accounts</span>
                                <Users className="w-4 h-4 text-brand-blue" />
                            </div>
                            <div className="text-3xl font-bold text-brand-navy">12,842</div>
                            <div className="mt-2 text-xs text-brand-blue font-medium">+8 new today</div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Health</span>
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            </div>
                            <div className="text-3xl font-bold text-brand-navy">Optimum</div>
                            <div className="mt-2 text-xs text-slate-400 font-medium">All systems operational</div>
                        </motion.div>
                    </div>

                    {/* Recent Alerts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-brand-navy">Security Alerts</h2>
                                <Button variant="ghost" className="text-[10px] uppercase font-bold tracking-widest text-brand-blue hover:bg-brand-blue/5">View History</Button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: 'New Admin Login Detected', time: '2 mins ago', level: 'info' },
                                    { title: 'Multiple Failed Login Attempts', time: '14 mins ago', level: 'warning' },
                                    { title: 'Global Settings Updated', time: '2 hours ago', level: 'info' }
                                ].map((alert, i) => (
                                    <div key={i} className="bg-white p-6 border border-slate-200 flex items-center gap-6 group hover:border-brand-blue transition-all">
                                        <div className={`p-3 rounded-sm ${alert.level === 'warning' ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-brand-blue'}`}>
                                            <AlertCircle className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-brand-navy">{alert.title}</h4>
                                            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{alert.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-brand-navy p-10 text-white rounded-sm relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Secure Your Access</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                                    Your administrator account is protected by hardware-level security and mandatory two-factor authentication. Always ensure you log out after each session.
                                </p>
                            </div>
                            <Button className="w-fit bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-none px-10 py-6 font-bold uppercase tracking-widest transition-all">
                                Update Security Profile
                            </Button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
