import React, { useState, useEffect } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { useForm, Link, router } from '@inertiajs/react';
import { 
    Plus, 
    Pencil, 
    Trash2, 
    X, 
    Search,
    ChevronLeft,
    ChevronRight,
    FileText,
    Upload,
    Calendar,
    Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { index, store, update, destroy as remove } from '@/routes/system/mgt/publications';
import Swal from 'sweetalert2';

interface Publication {
    id: number;
    title: string;
    category: string;
    file_path: string | null;
    file_type: string;
    file_size: string | null;
    published_at: string;
}

interface Props {
    publications: {
        data: Publication[];
        links: any[];
        total: number;
        from: number;
        to: number;
    };
    filters?: {
        search?: string;
        category?: string;
    };
    categories: string[];
}

export default function PublicationsIndex({ publications, filters, categories }: Props) {
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [searchQuery, setSearchQuery] = useState(filters?.search || "");
    const [categoryFilter, setCategoryFilter] = useState(filters?.category || "ALL");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery !== (filters?.search || "") || categoryFilter !== (filters?.category || "ALL")) {
                router.get(index.url(), { 
                    search: searchQuery,
                    category: categoryFilter
                }, { 
                    preserveState: true, 
                    replace: true,
                    preserveScroll: true 
                });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, categoryFilter]);

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        title: '',
        category: 'Annual Reports',
        published_at: new Date().toISOString().split('T')[0],
        file: null as File | null,
        _method: 'POST' // For update
    });

    const handleEdit = (pub: Publication) => {
        setData({
            title: pub.title,
            category: pub.category,
            published_at: pub.published_at.split('T')[0],
            file: null,
            _method: 'POST'
        });
        setIsEditing(pub.id);
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
            // Use post with _method: 'POST' but we'll use the update route which I defined as POST in web.php
            // Actually, I'll use the update.url(isEditing)
            post(update.url(isEditing), {
                onSuccess: () => handleCancel(),
            });
        } else {
            post(store.url(), {
                onSuccess: () => handleCancel(),
            });
        }
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This publication will be permanently removed!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#002855',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            customClass: {
                popup: 'rounded-none',
                confirmButton: 'rounded-none px-6 py-2 font-bold uppercase tracking-widest text-xs',
                cancelButton: 'rounded-none px-6 py-2 font-bold uppercase tracking-widest text-xs'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(remove.url(id), {
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'The publication has been deleted.',
                            icon: 'success',
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            customClass: {
                                popup: 'rounded-none border-brand-blue border-l-4',
                            }
                        });
                    }
                });
            }
        });
    };

    return (
        <AdminLayout title="Publications Management">
            <div className="space-y-8">
                {/* Actions Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 flex-1 w-full lg:w-auto">
                        <div>
                            <h2 className="text-lg font-bold text-brand-navy">Publications</h2>
                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Manage downloadable documents and reports</p>
                        </div>
                        
                        {/* Search & Filter */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 max-w-2xl w-full">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input 
                                    type="text"
                                    placeholder="Search by title..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 text-sm rounded-sm transition-all"
                                />
                            </div>
                            <div className="relative w-full sm:w-48">
                                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <select 
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 text-sm rounded-sm transition-all appearance-none"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
                        {!isAdding && !isEditing && (
                            <Button 
                                onClick={() => setIsAdding(true)}
                                className="bg-brand-blue hover:bg-brand-navy text-white rounded-none px-6 py-2 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" /> Add Publication
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
                            {isEditing ? 'Update Publication' : 'Add New Publication'}
                        </h3>

                        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Document Title</label>
                                <input 
                                    type="text" 
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="e.g. Annual Report 2021"
                                />
                                {errors.title && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.title}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</label>
                                <select 
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                >
                                    {categories.filter(c => c !== 'ALL').map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                {errors.category && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.category}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Publication Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input 
                                        type="date" 
                                        value={data.published_at}
                                        onChange={e => setData('published_at', e.target.value)}
                                        className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm pl-10 p-3 rounded-sm"
                                    />
                                </div>
                                {errors.published_at && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.published_at}</div>}
                            </div>

                            <div className="lg:col-span-2 space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Upload File (PDF, DOC, XLS)</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 relative">
                                        <Upload className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input 
                                            type="file" 
                                            onChange={e => setData('file', e.target.files?.[0] || null)}
                                            className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm pl-10 p-2.5 rounded-sm file:hidden cursor-pointer bg-slate-50"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                                            {data.file ? data.file.name : 'NO FILE SELECTED'}
                                        </div>
                                    </div>
                                    {isEditing && !data.file && (
                                        <div className="text-[10px] font-bold text-brand-blue bg-brand-blue/5 px-3 py-2 rounded-sm border border-brand-blue/10">
                                            KEEP EXISTING FILE
                                        </div>
                                    )}
                                </div>
                                {errors.file && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.file}</div>}
                            </div>

                            <div className="lg:col-span-3 flex justify-end gap-4 pt-4 border-t border-slate-100">
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
                                    {processing ? 'Processing...' : (isEditing ? 'Update Publication' : 'Add Publication')}
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
                                    <th className="py-4 px-6">Document Title</th>
                                    <th className="py-4 px-6">Category</th>
                                    <th className="py-4 px-6 text-center">Type</th>
                                    <th className="py-4 px-6 text-right">Size</th>
                                    <th className="py-4 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {publications.data.length > 0 ? publications.data.map((pub) => (
                                    <tr key={pub.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-brand-navy">{pub.title}</div>
                                            <div className="text-[10px] text-slate-400 font-medium uppercase">{new Date(pub.published_at).toLocaleDateString('en-GB')}</div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                                                {pub.category}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex items-center justify-center gap-1.5">
                                                <FileText className="w-3.5 h-3.5 text-brand-blue" />
                                                <span className="font-bold text-[10px] text-slate-500">{pub.file_type}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-right font-mono text-xs text-slate-500">{pub.file_size || 'N/A'}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => handleEdit(pub)}
                                                    className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-sm transition-all"
                                                    title="Edit Publication"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(pub.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-sm transition-all"
                                                    title="Delete Publication"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-slate-400 italic">
                                            No publications found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-xs text-slate-400 font-medium">
                            Showing <span className="text-brand-navy font-bold">{publications.from}</span> to <span className="text-brand-navy font-bold">{publications.to}</span> of <span className="text-brand-navy font-bold">{publications.total}</span> entries
                        </div>
                        <div className="flex items-center gap-1">
                            {publications.links.map((link, i) => (
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
