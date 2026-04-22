import AdminLayout from '@/layouts/admin-layout';
import { motion } from 'framer-motion';
import { 
    FileText, 
    TrendingUp,
    ShieldCheck,
    Clock,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { index as navIndex } from '@/routes/system/mgt/nav-funds';
import { index as pubIndex } from '@/routes/system/mgt/publications';

interface Props {
    stats: {
        funds_count: number;
        publications_count: number;
        latest_update: string;
    };
}

export default function AdminDashboard({ stats }: Props) {
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
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monitored Funds</span>
                            <TrendingUp className="w-4 h-4 text-brand-blue" />
                        </div>
                        <div className="text-3xl font-bold text-brand-navy">{stats.funds_count}</div>
                        <div className="mt-2 text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> Updated: {new Date(stats.latest_update).toLocaleDateString('en-GB')}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Publications</span>
                            <FileText className="w-4 h-4 text-[#00B050]" />
                        </div>
                        <div className="text-3xl font-bold text-brand-navy">{stats.publications_count}</div>
                        <div className="mt-2 text-xs text-[#00B050] font-medium tracking-wide">Dynamic document distribution</div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Security</span>
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="text-3xl font-bold text-brand-navy">Optimum</div>
                        <div className="mt-2 text-xs text-slate-400 font-medium tracking-wide">All systems operational</div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-brand-navy">Management Hub</h2>
                        </div>
                        <div className="space-y-4">
                            <Link 
                                href={navIndex.url()}
                                className="bg-white p-8 border border-slate-200 flex items-center justify-between group hover:border-brand-blue transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-slate-50 text-brand-blue rounded-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-brand-navy">Update NAV Funds</h4>
                                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">Manage net asset values for the public site</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-blue transition-all group-hover:translate-x-1" />
                            </Link>

                            <Link 
                                href={pubIndex.url()}
                                className="bg-white p-8 border border-slate-200 flex items-center justify-between group hover:border-[#00B050] transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-slate-50 text-[#00B050] rounded-sm group-hover:bg-[#00B050] group-hover:text-white transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-brand-navy">Manage Publications</h4>
                                        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">Upload reports and governance documents</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#00B050] transition-all group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </section>

                    <section className="bg-brand-navy p-10 text-white rounded-sm relative overflow-hidden flex flex-col justify-between shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Administrator Portal</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm font-light">
                                Welcome to the United Cooperate Trust Bank management system. Use this secure portal to update critical financial data and distribute public communications.
                            </p>
                        </div>
                        <div className="relative z-10 p-6 bg-white/5 border border-white/10 rounded-sm">
                            <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Security Notice</div>
                            <div className="text-xs text-slate-400 font-medium leading-relaxed">
                                Always verify fund data before publishing. Changes made here reflect immediately on the global public website.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AdminLayout>
    );
}
