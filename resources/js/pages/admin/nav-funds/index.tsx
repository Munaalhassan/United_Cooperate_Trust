import React, { useState, useEffect } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { useForm, Link, router } from '@inertiajs/react';
import { 
    Plus, 
    Pencil, 
    Trash2, 
    X, 
    Check,
    Search,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { index, store, update, destroy as remove, exportMethod } from '@/routes/system/mgt/nav-funds';

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

interface Props {
    funds: {
        data: Fund[];
        links: any[];
        total: number;
        from: number;
        to: number;
    };
    filters?: {
        search?: string;
    };
}

export default function NavFundsIndex({ funds, filters }: Props) {
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [searchQuery, setSearchQuery] = useState(filters?.search || "");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery !== (filters?.search || "")) {
                router.get(index.url(), { search: searchQuery }, { 
                    preserveState: true, 
                    replace: true,
                    preserveScroll: true 
                });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const { data, setData, post, put, delete: destroy, processing, errors, reset, clearErrors } = useForm({
        name: '',
        isin: '',
        ccy: 'EUR',
        date: '',
        price: '',
        last_price: '',
        change: '',
        yield: '',
    });

    const handleEdit = (fund: Fund) => {
        setData({
            name: fund.name,
            isin: fund.isin,
            ccy: fund.ccy,
            date: fund.date.split('T')[0],
            price: fund.price,
            last_price: fund.last_price,
            change: fund.change,
            yield: fund.yield,
        });
        setIsEditing(fund.id);
        setIsAdding(false);
    };

    const handleCancel = () => {
        setIsEditing(null);
        setIsAdding(false);
        reset();
        clearErrors();
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            put(update.url(isEditing), {
                onSuccess: () => handleCancel(),
            });
        } else {
            post(store.url(), {
                onSuccess: () => handleCancel(),
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this fund entry?')) {
            destroy(remove.url(id));
        }
    };

    return (
        <AdminLayout title="NAV Centre Management">
            <div className="space-y-8">
                {/* Actions Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1 w-full lg:w-auto">
                        <div>
                            <h2 className="text-lg font-bold text-brand-navy">Fund List</h2>
                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Manage net asset values for monitored funds</p>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md w-full sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search by name or ISIN..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 text-sm rounded-sm transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
                        <a 
                            href={exportMethod.url()}
                            className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-bold uppercase tracking-widest text-[10px] rounded-sm"
                        >
                            <Download className="w-3.5 h-3.5" /> Export CSV
                        </a>
                        
                        {!isAdding && !isEditing && (
                            <Button 
                                onClick={() => setIsAdding(true)}
                                className="bg-brand-blue hover:bg-brand-navy text-white rounded-none px-6 py-2 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" /> Add New Fund
                            </Button>
                        )}
                    </div>
                </div>

                {/* Form Section (Conditional) */}
                {(isAdding || isEditing) && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-8 border border-brand-blue shadow-lg rounded-sm relative"
                    >
                        <button 
                            onClick={handleCancel}
                            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        <h3 className="text-xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                            {isEditing ? <Pencil className="w-5 h-5 text-brand-blue" /> : <Plus className="w-5 h-5 text-brand-blue" />}
                            {isEditing ? 'Update Fund Entry' : 'Create New Fund Entry'}
                        </h3>

                        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="lg:col-span-2 space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fund Name</label>
                                <input 
                                    type="text" 
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="e.g. Prelium A (LF) Total Return"
                                />
                                {errors.name && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.name}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ISIN Code</label>
                                <input 
                                    type="text" 
                                    value={data.isin}
                                    onChange={e => setData('isin', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm font-mono"
                                    placeholder="LU0517761358"
                                />
                                {errors.isin && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.isin}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Currency</label>
                                <select 
                                    value={data.ccy}
                                    onChange={e => setData('ccy', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                >
                                    <option value="EUR">EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="GBP">GBP</option>
                                    <option value="RON">RON</option>
                                    <option value="BGN">BGN</option>
                                </select>
                                {errors.ccy && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.ccy}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Valuation Date</label>
                                <input 
                                    type="date" 
                                    value={data.date}
                                    onChange={e => setData('date', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                />
                                {errors.date && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.date}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Price</label>
                                <input 
                                    type="number" 
                                    step="0.0001"
                                    value={data.price}
                                    onChange={e => setData('price', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="0.0000"
                                />
                                {errors.price && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.price}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Price</label>
                                <input 
                                    type="number" 
                                    step="0.0001"
                                    value={data.last_price}
                                    onChange={e => setData('last_price', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="0.0000"
                                />
                                {errors.last_price && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.last_price}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Change</label>
                                <input 
                                    type="number" 
                                    step="0.0001"
                                    value={data.change}
                                    onChange={e => setData('change', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="0.0000"
                                />
                                {errors.change && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.change}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Yield (%)</label>
                                <input 
                                    type="number" 
                                    step="0.01"
                                    value={data.yield}
                                    onChange={e => setData('yield', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="0.00"
                                />
                                {errors.yield && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.yield}</div>}
                            </div>

                            <div className="lg:col-span-4 flex justify-end gap-4 pt-4 border-t border-slate-100">
                                <Button 
                                    type="button" 
                                    variant="ghost" 
                                    onClick={handleCancel}
                                    className="rounded-none font-bold uppercase tracking-widest text-xs"
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    type="submit" 
                                    disabled={processing}
                                    className="bg-brand-blue hover:bg-brand-navy text-white rounded-none px-10 py-2 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
                                >
                                    {processing ? 'Processing...' : (isEditing ? 'Update Fund' : 'Create Fund')}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {/* Table Section */}
                <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <th className="py-4 px-6">Fund Name</th>
                                    <th className="py-4 px-6">ISIN</th>
                                    <th className="py-4 px-6 text-center">CCY</th>
                                    <th className="py-4 px-6 text-right">Price</th>
                                    <th className="py-4 px-6 text-right">Yield</th>
                                    <th className="py-4 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {funds.data.map((fund) => (
                                    <tr key={fund.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-brand-navy">{fund.name}</div>
                                            <div className="text-[10px] text-slate-400 font-medium uppercase">{new Date(fund.date).toLocaleDateString('en-GB')}</div>
                                        </td>
                                        <td className="py-4 px-6 font-mono text-xs text-slate-500">{fund.isin}</td>
                                        <td className="py-4 px-6 text-center">
                                            <span className="bg-slate-100 px-2 py-1 rounded-sm text-[10px] font-bold text-slate-600 uppercase tracking-wider">{fund.ccy}</span>
                                        </td>
                                        <td className="py-4 px-6 text-right font-mono font-medium text-slate-700">{fund.price}</td>
                                        <td className={`py-4 px-6 text-right font-medium ${parseFloat(fund.yield) < 0 ? 'text-red-500' : 'text-green-600'}`}>
                                            {parseFloat(fund.yield).toFixed(2)}%
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => handleEdit(fund)}
                                                    className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-sm transition-all"
                                                    title="Edit Fund"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(fund.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-sm transition-all"
                                                    title="Delete Fund"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-xs text-slate-400 font-medium">
                            Showing <span className="text-brand-navy font-bold">{funds.from}</span> to <span className="text-brand-navy font-bold">{funds.to}</span> of <span className="text-brand-navy font-bold">{funds.total}</span> entries
                        </div>
                        <div className="flex items-center gap-1">
                            {funds.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url || '#'}
                                    className={`px-3 py-1 text-xs font-bold transition-all rounded-sm ${link.active ? 'bg-brand-blue text-white' : 'text-slate-400 hover:bg-slate-50 hover:text-brand-navy'} ${!link.url ? 'opacity-30 cursor-not-allowed' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
