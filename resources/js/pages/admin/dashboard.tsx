import AdminLayout from '@/layouts/admin-layout';
import { motion } from 'framer-motion';
import { 
    Users, 
    TrendingUp,
    AlertCircle,
    ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
    return (
        <AdminLayout title="System Overview">
            <div className="max-w-7xl">
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
        </AdminLayout>
    );
}
