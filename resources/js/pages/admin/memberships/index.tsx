import React, { useState, useEffect } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm, Link, usePage } from '@inertiajs/react';
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
    Landmark,
    Plus,
    Calendar,
    Fingerprint,
    FileText as FileIcon,
    Shield,
    Edit
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
import Swal from 'sweetalert2';
import { 
    update as memUpdate, 
    destroy as memDestroy, 
    create as memCreate,
    edit as memEdit 
} from '@/routes/system/mgt/memberships';

interface Membership {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    nationality: string;
    ssn: string;
    dl: string;
    username: string;
    account_type: string;
    occupation: string;
    address: string;
    dl_upload: string | null;
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

    // Auto-open modal if 'review' parameter exists
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const reviewId = params.get('review');
        
        if (reviewId) {
            const reg = registrations.find(r => r.id.toString() === reviewId);
            if (reg) {
                handleView(reg);
            }
        }
    }, [registrations]);

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
            },
        });
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
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
                destroy(memDestroy.url(id), {
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Record has been deleted.',
                            icon: 'success',
                            confirmButtonColor: '#002855',
                            customClass: {
                                popup: 'rounded-none',
                                confirmButton: 'rounded-none px-8 py-3 font-bold uppercase tracking-widest text-[10px]',
                            }
                        });
                    }
                });
            }
        });
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
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h1 className="text-2xl font-bold text-brand-navy uppercase tracking-tight">Memberships</h1>
                        <p className="text-slate-500 text-sm font-light">Review and manage global bank membership applications.</p>
                    </div>
                    <Link 
                        href={memCreate.url()}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white font-bold text-[10px] uppercase tracking-widest hover:bg-brand-navy transition-all shadow-lg"
                    >
                        <Plus className="w-4 h-4" /> Create Member
                    </Link>
                </div>

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
                                                <DropdownMenuItem asChild>
                                                    <Link 
                                                        href={memEdit.url(reg.id)}
                                                        className="text-xs font-bold uppercase tracking-widest text-slate-600 cursor-pointer"
                                                    >
                                                        <Edit className="w-3.5 h-3.5 mr-2" /> Edit Member
                                                    </Link>
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
                <DialogContent className="sm:max-w-4xl rounded-none border-slate-200 max-h-[90vh] overflow-y-auto">
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
                            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
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
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Calendar className="w-2.5 h-2.5" /> Date of Birth / Gender</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.dob} ({selectedReg.gender})</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Fingerprint className="w-2.5 h-2.5" /> SSN / National ID</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.ssn}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><FileIcon className="w-2.5 h-2.5" /> Driver's License</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.dl}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Shield className="w-2.5 h-2.5" /> Desired Username</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.username}</div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><Briefcase className="w-2.5 h-2.5" /> Occupation</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.occupation}</div>
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5"><MapPin className="w-2.5 h-2.5" /> Residential Address</Label>
                                    <div className="text-sm font-bold text-brand-navy">{selectedReg.address}</div>
                                </div>
                            </div>

                            {selectedReg.dl_upload && (
                                <div className="space-y-3">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">Identification Document</Label>
                                    <div className="border border-slate-200 p-2 bg-slate-50">
                                        <img 
                                            src={`/storage/${selectedReg.dl_upload}`} 
                                            alt="ID Document" 
                                            className="w-full h-auto max-h-64 object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                            onClick={() => window.open(`/storage/${selectedReg.dl_upload}`, '_blank')}
                                        />
                                        <p className="text-[9px] text-center text-slate-400 mt-2 uppercase tracking-widest">Click image to view full size</p>
                                    </div>
                                </div>
                            )}

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
