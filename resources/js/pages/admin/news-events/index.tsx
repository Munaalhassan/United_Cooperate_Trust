import React, { useState, useEffect } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { useForm, Link, router } from '@inertiajs/react';
import { 
    Plus, 
    Pencil, 
    Trash2, 
    X, 
    Search,
    Calendar,
    Filter,
    Image as ImageIcon,
    Eye,
    EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { index, store, update, destroy as remove } from '@/routes/system/mgt/news-events';

interface NewsEventImage {
    id: number;
    image_url: string;
    caption: string | null;
}

interface NewsEvent {
    id: number;
    title: string;
    slug: string;
    type: 'News' | 'Event';
    date: string;
    excerpt: string;
    content: string;
    image_path: string | null;
    image_url: string | null;
    is_published: boolean;
    images: NewsEventImage[];
}

interface Props {
    newsEvents: {
        data: NewsEvent[];
        links: any[];
        total: number;
        from: number;
        to: number;
    };
    filters?: {
        search?: string;
        type?: string;
    };
    types: string[];
}

export default function NewsEventsIndex({ newsEvents, filters, types }: Props) {
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [searchQuery, setSearchQuery] = useState(filters?.search || "");
    const [typeFilter, setTypeFilter] = useState(filters?.type || "ALL");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery !== (filters?.search || "") || typeFilter !== (filters?.type || "ALL")) {
                router.get(index.url(), { 
                    search: searchQuery,
                    type: typeFilter
                }, { 
                    preserveState: true, 
                    replace: true,
                    preserveScroll: true 
                });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, typeFilter]);

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        title: '',
        type: 'News' as 'News' | 'Event',
        date: new Date().toISOString().split('T')[0],
        excerpt: '',
        content: '',
        image: null as File | null,
        is_published: true,
        gallery: [] as File[],
        gallery_captions: [] as string[],
        existing_gallery_captions: {} as Record<number, string>,
        deleted_gallery_ids: [] as number[],
        _method: 'POST' // For update
    });

    const handleEdit = (item: NewsEvent) => {
        setData({
            title: item.title,
            type: item.type,
            date: item.date,
            excerpt: item.excerpt,
            content: item.content,
            image: null,
            is_published: !!item.is_published,
            gallery: [],
            gallery_captions: [],
            existing_gallery_captions: item.images.reduce((acc, img) => ({ ...acc, [img.id]: img.caption || '' }), {}),
            deleted_gallery_ids: [],
            _method: 'POST'
        });
        setIsEditing(item.id);
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
        if (confirm('Are you sure you want to delete this item?')) {
            router.delete(remove.url(id));
        }
    };

    return (
        <AdminLayout title="News & Events Management">
            <div className="space-y-8">
                {/* Actions Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 flex-1 w-full lg:w-auto">
                        <div>
                            <h2 className="text-lg font-bold text-brand-navy">News & Events</h2>
                            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Manage corporate news and upcoming events</p>
                        </div>
                        
                        {/* Search & Filter */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 max-w-2xl w-full">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input 
                                    type="text"
                                    placeholder="Search news..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 text-sm rounded-sm transition-all"
                                />
                            </div>
                            <div className="relative w-full sm:w-48">
                                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <select 
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 text-sm rounded-sm transition-all appearance-none"
                                >
                                    {types.map(t => (
                                        <option key={t} value={t}>{t}</option>
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
                                <Plus className="w-4 h-4" /> Add News/Event
                            </Button>
                        )}
                    </div>
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
                            {isEditing ? 'Update News/Event' : 'Add New News/Event'}
                        </h3>

                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Title</label>
                                    <input 
                                        type="text" 
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                        placeholder="Enter title"
                                    />
                                    {errors.title && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.title}</div>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</label>
                                    <select 
                                        value={data.type}
                                        onChange={e => setData('type', e.target.value as 'News' | 'Event')}
                                        className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    >
                                        <option value="News">News</option>
                                        <option value="Event">Event</option>
                                    </select>
                                    {errors.type && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.type}</div>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input 
                                            type="date" 
                                            value={data.date}
                                            onChange={e => setData('date', e.target.value)}
                                            className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm pl-10 p-3 rounded-sm"
                                        />
                                    </div>
                                    {errors.date && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.date}</div>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Featured Image</label>
                                    <div className="flex flex-col gap-3">
                                        {isEditing && !data.image && newsEvents.data.find(n => n.id === isEditing)?.image_url && (
                                            <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-slate-200 bg-slate-50 group/current">
                                                <img 
                                                    src={newsEvents.data.find(n => n.id === isEditing)?.image_url || ''} 
                                                    alt="Current" 
                                                    className="w-full h-full object-cover opacity-60 group-hover/current:opacity-100 transition-opacity"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <span className="bg-brand-navy/80 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest backdrop-blur-sm">Current Image</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="relative">
                                            <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input 
                                                type="file" 
                                                onChange={e => setData('image', e.target.files?.[0] || null)}
                                                className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm pl-10 p-2.5 rounded-sm file:hidden cursor-pointer bg-slate-50"
                                                accept="image/*"
                                            />
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                                                {data.image ? data.image.name : (isEditing ? 'REPLACE CURRENT IMAGE' : 'NO FILE SELECTED')}
                                            </div>
                                        </div>
                                    </div>
                                    {errors.image && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.image}</div>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</label>
                                    <div className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-sm">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input 
                                                type="checkbox"
                                                checked={data.is_published}
                                                onChange={e => setData('is_published', e.target.checked)}
                                                className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                                            />
                                            <span className="text-xs font-bold text-slate-600 uppercase">Published</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Excerpt (Brief Summary)</label>
                                <textarea 
                                    value={data.excerpt}
                                    onChange={e => setData('excerpt', e.target.value)}
                                    rows={2}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm"
                                    placeholder="Enter a short summary..."
                                />
                                {errors.excerpt && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.excerpt}</div>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Content</label>
                                <textarea 
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    rows={10}
                                    className="w-full border-slate-200 focus:border-brand-blue focus:ring-0 text-sm p-3 rounded-sm font-sans"
                                    placeholder="Enter the full article content..."
                                />
                                {errors.content && <div className="text-red-500 text-[10px] font-bold uppercase">{errors.content}</div>}
                            </div>

                            {/* Gallery Section */}
                            <div className="space-y-6 pt-6 border-t border-slate-100">
                                <div>
                                    <h4 className="text-sm font-bold text-brand-navy flex items-center gap-2 uppercase tracking-widest">
                                        <ImageIcon className="w-4 h-4 text-brand-blue" /> Blog Gallery
                                    </h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Add supporting images to your blog post</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Existing Images */}
                                    {isEditing && newsEvents.data.find(n => n.id === isEditing)?.images.map((img) => (
                                        !data.deleted_gallery_ids.includes(img.id) && (
                                            <div key={img.id} className="relative group/img bg-slate-50 p-3 border border-slate-200 rounded-sm">
                                                <div className="aspect-video mb-3 overflow-hidden rounded-sm border border-slate-200">
                                                    <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <input 
                                                    type="text"
                                                    placeholder="Add caption..."
                                                    value={data.existing_gallery_captions[img.id] || ''}
                                                    onChange={e => setData('existing_gallery_captions', { ...data.existing_gallery_captions, [img.id]: e.target.value })}
                                                    className="w-full text-[11px] font-medium border-slate-200 focus:border-brand-blue focus:ring-0 p-2 rounded-sm bg-white"
                                                />
                                                <button 
                                                    type="button"
                                                    onClick={() => setData('deleted_gallery_ids', [...data.deleted_gallery_ids, img.id])}
                                                    className="absolute top-4 right-4 bg-red-500 text-white p-1.5 rounded-sm opacity-0 group-hover/img:opacity-100 transition-opacity shadow-lg"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        )
                                    ))}

                                    {/* New Images */}
                                    {data.gallery.map((file, idx) => (
                                        <div key={idx} className="bg-brand-blue/5 p-3 border border-brand-blue/20 rounded-sm relative">
                                            <div className="aspect-video mb-3 bg-white flex items-center justify-center rounded-sm border border-slate-100 overflow-hidden">
                                                <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <input 
                                                type="text"
                                                placeholder="Add caption..."
                                                value={data.gallery_captions[idx] || ''}
                                                onChange={e => {
                                                    const newCaptions = [...data.gallery_captions];
                                                    newCaptions[idx] = e.target.value;
                                                    setData('gallery_captions', newCaptions);
                                                }}
                                                className="w-full text-[11px] font-medium border-slate-200 focus:border-brand-blue focus:ring-0 p-2 rounded-sm bg-white"
                                            />
                                            <button 
                                                type="button"
                                                onClick={() => {
                                                    const newGallery = data.gallery.filter((_, i) => i !== idx);
                                                    const newCaptions = data.gallery_captions.filter((_, i) => i !== idx);
                                                    setData({ ...data, gallery: newGallery, gallery_captions: newCaptions });
                                                }}
                                                className="absolute top-4 right-4 bg-slate-800 text-white p-1.5 rounded-sm shadow-lg hover:bg-red-500 transition-colors"
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ))}

                                    {/* Add Button */}
                                    <div className="relative border-2 border-dashed border-slate-200 hover:border-brand-blue transition-colors rounded-sm flex flex-col items-center justify-center p-8 cursor-pointer group min-h-[160px]">
                                        <input 
                                            type="file" 
                                            multiple
                                            onChange={e => {
                                                const files = Array.from(e.target.files || []);
                                                setData({
                                                    ...data,
                                                    gallery: [...data.gallery, ...files],
                                                    gallery_captions: [...data.gallery_captions, ...files.map(() => '')]
                                                });
                                            }}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept="image/*"
                                        />
                                        <Plus className="w-8 h-8 text-slate-300 group-hover:text-brand-blue mb-2 transition-colors" />
                                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-brand-blue uppercase tracking-widest transition-colors">Add Gallery Images</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
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
                                    {processing ? 'Processing...' : (isEditing ? 'Update News/Event' : 'Add News/Event')}
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
                                    <th className="py-4 px-6">Image</th>
                                    <th className="py-4 px-6">Title & Type</th>
                                    <th className="py-4 px-6">Date</th>
                                    <th className="py-4 px-6">Status</th>
                                    <th className="py-4 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {newsEvents.data.length > 0 ? newsEvents.data.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group">
                                        <td className="py-4 px-6">
                                            {item.image_url ? (
                                                <img src={item.image_url} alt="" className="w-12 h-12 object-cover rounded-sm border border-slate-200" />
                                            ) : (
                                                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm border border-slate-200">
                                                    <ImageIcon className="w-4 h-4 text-slate-400" />
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-brand-navy">{item.title}</div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${item.type === 'News' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                                    {item.type}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                                                {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            {item.is_published ? (
                                                <div className="flex items-center gap-1.5 text-green-600 font-bold text-[10px] uppercase tracking-widest">
                                                    <Eye className="w-3.5 h-3.5" /> Published
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                                                    <EyeOff className="w-3.5 h-3.5" /> Draft
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => handleEdit(item)}
                                                    className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-sm transition-all"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(item.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-sm transition-all"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-slate-400 italic">
                                            No news or events found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-xs text-slate-400 font-medium">
                            Showing <span className="text-brand-navy font-bold">{newsEvents.from || 0}</span> to <span className="text-brand-navy font-bold">{newsEvents.to || 0}</span> of <span className="text-brand-navy font-bold">{newsEvents.total}</span> entries
                        </div>
                        <div className="flex items-center gap-1">
                            {newsEvents.links.map((link, i) => (
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
