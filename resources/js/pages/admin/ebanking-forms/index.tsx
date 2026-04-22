import React, { useState } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { useForm, router } from '@inertiajs/react';
import { 
    Plus, 
    Pencil, 
    Trash2, 
    X, 
    FileText, 
    Upload, 
    CheckCircle2,
    XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { store, update, destroy } from '@/routes/system/mgt/ebanking-forms';
import Swal from 'sweetalert2';

interface EBankingForm {
    id: number;
    category: string;
    title: string;
    file_path: string;
    is_active: boolean;
    created_at: string;
}

interface Props {
    forms: EBankingForm[];
}

const CATEGORIES = [
    'Natural Person',
    'Legal Entities',
    'Funds',
    'Specific Conditions'
];

export default function EBankingFormsIndex({ forms }: Props) {
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState(false);

    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm({
        category: 'Natural Person',
        title: '',
        file: null as File | null,
        is_active: true,
    });

    const handleEdit = (form: EBankingForm) => {
        setData({
            category: form.category,
            title: form.title,
            file: null,
            is_active: form.is_active,
        });
        setIsEditing(form.id);
        setIsAdding(false);
    };

    const handleCancel = () => {
        setIsEditing(null);
        setIsAdding(false);
        reset();
        clearErrors();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (isEditing) {
            // Laravel doesn't handle multipart/form-data with PUT easily, so we use POST with _method
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('category', data.category);
            formData.append('title', data.title);
            formData.append('is_active', data.is_active ? '1' : '0');
            if (data.file) {
                formData.append('file', data.file);
            }

            router.post(update.url(isEditing), formData as any, {
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
            text: "This form will be permanently removed!",
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
                router.delete(destroy.url(id), {
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'The form has been deleted.',
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
        <AdminLayout title="E-Banking Forms Management">
            <div className="space-y-8">
                {/* Header Actions */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
                    <div>
                        <h2 className="text-lg font-bold text-brand-navy">E-Banking Registration Forms</h2>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Manage forms for Natural Persons, Legal Entities, and Funds</p>
                    </div>

                    {!isAdding && !isEditing && (
                        <Button 
                            onClick={() => setIsAdding(true)}
                            className="bg-brand-blue hover:bg-brand-navy text-white rounded-none px-6 py-2 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" /> Add New Form
                        </Button>
                    )}
                </div>

                {/* Form Section */}
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
                            {isEditing ? 'Update E-Banking Form' : 'Add New E-Banking Form'}
                        </h3>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</label>
                                <select 
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                >
                                    {CATEGORIES.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                {errors.category && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.category}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Form Title</label>
                                <input 
                                    type="text" 
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="e.g. Application form"
                                />
                                {errors.title && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.title}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Upload File</label>
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
                                </div>
                                {errors.file && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.file}</div>}
                            </div>

                            <div className="flex items-center gap-3 pt-8">
                                <input 
                                    type="checkbox" 
                                    id="is_active"
                                    checked={data.is_active}
                                    onChange={e => setData('is_active', e.target.checked)}
                                    className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                                />
                                <label htmlFor="is_active" className="text-xs font-bold text-slate-600 uppercase tracking-widest cursor-pointer">
                                    Active / Visible on Frontend
                                </label>
                            </div>

                            <div className="md:col-span-2 flex justify-end gap-4 pt-6 border-t border-slate-100">
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
                                    {processing ? 'Processing...' : (isEditing ? 'Update Form' : 'Add Form')}
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
                                    <th className="py-4 px-6">Form Title</th>
                                    <th className="py-4 px-6">Category</th>
                                    <th className="py-4 px-6 text-center">Status</th>
                                    <th className="py-4 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {forms.length > 0 ? forms.map((form) => (
                                    <tr key={form.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-4 h-4 text-brand-blue" />
                                                <div className="font-bold text-brand-navy">{form.title}</div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                                                {form.category}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {form.is_active ? (
                                                <span className="inline-flex items-center gap-1.5 text-green-600 font-bold text-[10px] uppercase">
                                                    <CheckCircle2 className="w-3 h-3" /> Active
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase">
                                                    <XCircle className="w-3 h-3" /> Inactive
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <a 
                                                    href={form.file_path} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-sm transition-all"
                                                    title="View File"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                </a>
                                                <button 
                                                    onClick={() => handleEdit(form)}
                                                    className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-sm transition-all"
                                                    title="Edit Form"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(form.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-sm transition-all"
                                                    title="Delete Form"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="py-20 text-center text-slate-400 italic">
                                            No forms found. Click "Add New Form" to get started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
