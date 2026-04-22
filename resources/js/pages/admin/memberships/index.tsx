import React, { useState } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { 
    Users, 
    User,
    MoreVertical, 
    CheckCircle2, 
    XCircle, 
    Clock, 
    Trash2, 
    Eye,
    Search,
    Filter,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Globe,
    Landmark
} from 'lucide-react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { update as memUpdate, destroy as memDestroy } from '@/routes/system/mgt/memberships';

interface Membership {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    nationality: string;
    account_type: string;
    occupation: string;
    address: string;
    status: 'pending' | 'approved' | 'rejected';
    admin_notes: string | null;
    created_at: string;
}

interface Props {
    registrations: Membership[];
}

export default function MembershipsIndex({ registrations }: Props) {
    const [selectedReg, setSelectedReg] = useState<Membership | null>(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const { data, setData, put, delete: destroy, processing } = useForm({
        status: 'pending' as 'pending' | 'approved' | 'rejected',
        admin_notes: '',
    });

    const filteredRegs = registrations.filter(reg => 
        `${reg.first_name} ${reg.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleView = (reg: Membership) => {
        setSelectedReg(reg);
        setData({
            status: reg.status,
            admin_notes: reg.admin_notes || '',
        });
        setIsViewOpen(true);
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedReg) return;

        put(memUpdate.url(selectedReg.id), {
            onSuccess: () => {
                setIsViewOpen(false);
                toast.success('Membership updated successfully');
            },
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this registration?')) {
            destroy(memDestroy.url(id), {
                onSuccess: () => toast.success('Membership deleted successfully'),
            });
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full"><CheckCircle2 className="w-3 h-3" /> Approved</span>;
            case 'rejected':
                return <span className="flex items-center gap-1.5 px-2.5 py-1 bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider rounded-full"><XCircle className="w-3 h-3" /> Rejected</span>;
            default:
                return <span className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded-full"><Clock className="w-3 h-3" /> Pending</span>;
        }
    };

    return (
        <AdminLayout title="E-Banking Memberships">
            <Head title="E-Banking Memberships | Admin" />

            <div className="space-y-8">
                {/* Header Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Requests</p>
                            <h3 className="text-3xl font-bold text-brand-navy">{registrations.length}</h3>
                        </div>
                        <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between border-l-4 border-l-amber-400">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pending Review</p>
                            <h3 className="text-3xl font-bold text-brand-navy">{registrations.filter(r => r.status === 'pending').length}</h3>
                        </div>
                        <div className="w-12 h-12 bg-amber-100 flex items-center justify-center text-amber-600">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="bg-white p-6 border border-slate-200 shadow-sm flex items-center justify-between border-l-4 border-l-green-400">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Approved Accounts</p>
                            <h3 className="text-3xl font-bold text-brand-navy">{registrations.filter(r => r.status === 'approved').length}</h3>
                        </div>
                        <div className="w-12 h-12 bg-green-100 flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Table Actions */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 border border-slate-200">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input 
                            placeholder="Search by name or email..." 
                            className="pl-10 h-11 border-slate-200 focus:border-brand-blue focus:ring-0 rounded-none bg-slate-50/50"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button variant="outline" className="h-11 px-6 rounded-none border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600">
                            <Filter className="w-3.5 h-3.5 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400 py-6">Applicant</TableHead>
                                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Account Type</TableHead>
                                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Date</TableHead>
                                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</TableHead>
                                <TableHead className="text-right py-6 pr-8"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredRegs.length > 0 ? filteredRegs.map((reg) => (
                                <TableRow key={reg.id} className="group border-b border-slate-100 last:border-0">
                                    <TableCell className="py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                {reg.first_name.charAt(0)}{reg.last_name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-brand-navy">{reg.first_name} {reg.last_name}</div>
                                                <div className="text-xs text-slate-400">{reg.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-2">
                                            <Landmark className="w-3.5 h-3.5 text-brand-blue" /> {reg.account_type}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-xs text-slate-500 font-medium">
                                        {new Date(reg.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </TableCell>
                                    <TableCell>
                                        {getStatusBadge(reg.status)}
                                    </TableCell>
                                    <TableCell className="text-right pr-8">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-brand-navy">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48 rounded-none border-slate-200">
                                                <DropdownMenuItem onClick={() => handleView(reg)} className="text-xs font-bold uppercase tracking-widest text-slate-600 cursor-pointer">
                                                    <Eye className="w-3.5 h-3.5 mr-2" /> View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleDelete(reg.id)} className="text-xs font-bold uppercase tracking-widest text-red-600 cursor-pointer">
                                                    <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete Record
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="py-20 text-center">
                                        <Users className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                        <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">No registrations found</p>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* View/Edit Detail Dialog */}
            <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
                <DialogContent className="max-w-2xl rounded-none border-slate-200 max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="border-b border-slate-100 pb-6 mb-6">
                        <DialogTitle className="text-2xl font-bold text-brand-navy flex items-center gap-3">
                            <Landmark className="w-6 h-6 text-brand-blue" /> Application Review
                        </DialogTitle>
                        <DialogDescription className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 pt-1">
                            Reference ID: #{selectedReg?.id}
                        </DialogDescription>
                    </DialogHeader>

                    {selectedReg && (
                        <div className="space-y-10">
                            {/* Applicant Info Grid */}
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><User className="w-2.5 h-2.5" /> Full Name</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.first_name} {selectedReg.last_name}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Mail className="w-2.5 h-2.5" /> Email Address</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.email}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Phone className="w-2.5 h-2.5" /> Phone Number</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.phone}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Globe className="w-2.5 h-2.5" /> Nationality</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.nationality}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Briefcase className="w-2.5 h-2.5" /> Occupation</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.occupation}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><MapPin className="w-2.5 h-2.5" /> Address</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.address}</div>
                                </div>
                            </div>

                            <hr className="border-slate-100" />

                            {/* Management Form */}
                            <form onSubmit={handleUpdate} className="space-y-6 bg-slate-50 p-6 border border-slate-200">
                                <h3 className="text-xs font-black uppercase tracking-widest text-brand-blue">Administrative Action</h3>
                                
                                <div className="space-y-3">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Update Status</Label>
                                    <div className="flex gap-4">
                                        {['pending', 'approved', 'rejected'].map((status) => (
                                            <button
                                                key={status}
                                                type="button"
                                                onClick={() => setData('status', status as any)}
                                                className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${data.status === status ? 'bg-brand-blue border-brand-blue text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'}`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Internal Notes</Label>
                                    <Textarea 
                                        className="rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 min-h-[100px] text-sm"
                                        placeholder="Add internal notes about this applicant..."
                                        value={data.admin_notes}
                                        onChange={e => setData('admin_notes', e.target.value)}
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full h-12 bg-brand-navy text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-blue transition-all rounded-none"
                                    >
                                        {processing ? 'Applying Changes...' : 'Save Management Data'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </AdminLayout>
    );
}
