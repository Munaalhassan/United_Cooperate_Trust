import React from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ChevronLeft, Save, User, Mail, Phone, Globe, Briefcase, MapPin, Landmark, Lock, Calendar, Fingerprint, FileText, Upload, AlertCircle, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { update as memUpdate, index as memIndex } from '@/routes/system/mgt/memberships';

const countries = [
    'Afghanistan','Albania','Algeria','Andorra','Angola','Argentina','Armenia','Australia','Austria',
    'Azerbaijan','Bahamas','Bahrain','Bangladesh','Belarus','Belgium','Belize','Benin','Bolivia',
    'Bosnia and Herzegovina','Brazil','Bulgaria','Cambodia','Cameroon','Canada','Chile','China',
    'Colombia','Congo','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Dominican Republic',
    'Ecuador','Egypt','El Salvador','Estonia','Ethiopia','Finland','France','Georgia','Germany','Ghana',
    'Greece','Guatemala','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland',
    'Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kuwait','Latvia','Lebanon',
    'Libya','Lithuania','Luxembourg','Malaysia','Mexico','Morocco','Netherlands','New Zealand',
    'Nicaragua','Nigeria','Norway','Pakistan','Panama','Paraguay','Peru','Philippines','Poland',
    'Portugal','Qatar','Romania','Russia','Saudi Arabia','Senegal','Serbia','Singapore','Slovakia',
    'Slovenia','South Africa','South Korea','Spain','Sri Lanka','Sudan','Sweden','Switzerland',
    'Syria','Taiwan','Tanzania','Thailand','Trinidad and Tobago','Tunisia','Turkey','Uganda','Ukraine',
    'United Arab Emirates','United Kingdom','United States','Uruguay','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe',
];

interface Member {
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
}

interface Props {
    member: Member;
}

export default function Edit({ member }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        first_name: member.first_name || '',
        last_name: member.last_name || '',
        email: member.email || '',
        phone: member.phone || '',
        gender: member.gender || 'Male',
        dob: member.dob || '',
        nationality: member.nationality || '',
        ssn: member.ssn || '',
        dl: member.dl || '',
        username: member.username || '',
        account_type: member.account_type || 'Private Banking',
        occupation: member.occupation || '',
        address: member.address || '',
        status: member.status || 'pending',
        admin_notes: member.admin_notes || '',
        dl_upload: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Using post with _method: PUT because of file upload
        post(memUpdate.url(member.id), {
            onSuccess: () => {
            },
        });
    };

    return (
        <AdminLayout title={`Edit Member: ${member.first_name} ${member.last_name}`}>
            <Head title={`Edit Member | Admin Portal`} />

            <div className="mb-8">
                <Link 
                    href={memIndex.url()} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-brand-blue transition-colors mb-4"
                >
                    <ChevronLeft className="w-4 h-4" /> Back to Memberships
                </Link>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Edit Member</h1>
                        <p className="text-slate-500 text-sm">Update banking record for #{member.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2">Current Status:</span>
                        {member.status === 'approved' && <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider rounded-full"><CheckCircle2 className="w-3 h-3" /> Approved</span>}
                        {member.status === 'rejected' && <span className="flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-wider rounded-full"><XCircle className="w-3 h-3" /> Rejected</span>}
                        {member.status === 'pending' && <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-wider rounded-full"><Clock className="w-3 h-3" /> Pending</span>}
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm border border-slate-100 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl">
                    
                    {/* Management Section */}
                    <div className="bg-slate-50 p-8 border border-slate-200 space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue border-b border-slate-200 pb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> Administrative Management
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Member Status</Label>
                                <div className="flex gap-2">
                                    {['pending', 'approved', 'rejected'].map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setData('status', s as any)}
                                            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${data.status === s ? 'bg-brand-blue border-brand-blue text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Internal Notes</Label>
                                <Textarea 
                                    className="rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 min-h-[44px] text-sm"
                                    placeholder="Add internal notes about this member..."
                                    value={data.admin_notes}
                                    onChange={e => setData('admin_notes', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                        
                        {/* Personal Header */}
                        <div className="md:col-span-2">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue border-b border-slate-100 pb-2">Personal Information</h2>
                        </div>

                        {/* First Name */}
                        <div className="space-y-2">
                            <Label htmlFor="first_name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <User className="w-3 h-3" /> First Name
                            </Label>
                            <Input 
                                id="first_name"
                                value={data.first_name}
                                onChange={e => setData('first_name', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.first_name && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.first_name}</p>}
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <Label htmlFor="last_name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <User className="w-3 h-3" /> Last Name
                            </Label>
                            <Input 
                                id="last_name"
                                value={data.last_name}
                                onChange={e => setData('last_name', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.last_name && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.last_name}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Mail className="w-3 h-3" /> Email Address
                            </Label>
                            <Input 
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Phone className="w-3 h-3" /> Phone Number
                            </Label>
                            <Input 
                                id="phone"
                                value={data.phone}
                                onChange={e => setData('phone', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.phone}</p>}
                        </div>

                        {/* Gender */}
                        <div className="space-y-2">
                            <Label htmlFor="gender" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <User className="w-3 h-3" /> Gender
                            </Label>
                            <select 
                                id="gender"
                                value={data.gender}
                                onChange={e => setData('gender', e.target.value)}
                                className="w-full h-11 border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* DOB */}
                        <div className="space-y-2">
                            <Label htmlFor="dob" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> Date of Birth
                            </Label>
                            <Input 
                                id="dob"
                                type="date"
                                value={data.dob}
                                onChange={e => setData('dob', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.dob && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dob}</p>}
                        </div>

                        {/* Identity Header */}
                        <div className="md:col-span-2 pt-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue border-b border-slate-100 pb-2">Identity & Verification</h2>
                        </div>

                        {/* Nationality */}
                        <div className="space-y-2">
                            <Label htmlFor="nationality" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Globe className="w-3 h-3" /> Country
                            </Label>
                            <select 
                                id="nationality"
                                value={data.nationality}
                                onChange={e => setData('nationality', e.target.value)}
                                className="w-full h-11 border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
                            >
                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        {/* SSN */}
                        <div className="space-y-2">
                            <Label htmlFor="ssn" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Fingerprint className="w-3 h-3" /> SSN
                            </Label>
                            <Input 
                                id="ssn"
                                value={data.ssn}
                                onChange={e => setData('ssn', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                        </div>

                        {/* DL */}
                        <div className="space-y-2">
                            <Label htmlFor="dl" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <FileText className="w-3 h-3" /> Driver's License
                            </Label>
                            <Input 
                                id="dl"
                                value={data.dl}
                                onChange={e => setData('dl', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                        </div>

                        {/* DL Upload */}
                        <div className="space-y-2">
                            <Label htmlFor="dl_upload" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Upload className="w-3 h-3" /> Update ID Document (Optional)
                            </Label>
                            <div className="relative group">
                                <input 
                                    type="file"
                                    id="dl_upload"
                                    onChange={e => setData('dl_upload', e.target.files?.[0] || null)}
                                    className="hidden"
                                />
                                <label 
                                    htmlFor="dl_upload"
                                    className="flex items-center justify-between w-full h-11 border border-slate-200 bg-white px-4 cursor-pointer hover:border-brand-blue transition-colors"
                                >
                                    <span className="text-sm text-slate-400 truncate">
                                        {data.dl_upload ? data.dl_upload.name : (member.dl_upload ? 'Change current document...' : 'Choose file...')}
                                    </span>
                                    <Upload className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
                                </label>
                            </div>
                            {member.dl_upload && !data.dl_upload && (
                                <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">Current: {member.dl_upload.split('/').pop()}</p>
                            )}
                        </div>

                        {/* Security Header */}
                        <div className="md:col-span-2 pt-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue border-b border-slate-100 pb-2">Account Details</h2>
                        </div>

                        {/* Username */}
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <User className="w-3 h-3" /> Username
                            </Label>
                            <Input 
                                id="username"
                                value={data.username}
                                onChange={e => setData('username', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                        </div>

                        {/* Account Type */}
                        <div className="space-y-2">
                            <Label htmlFor="account_type" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Landmark className="w-3 h-3" /> Interest Type
                            </Label>
                            <select 
                                id="account_type"
                                value={data.account_type}
                                onChange={e => setData('account_type', e.target.value)}
                                className="w-full h-11 border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
                            >
                                <option>Private Banking</option>
                                <option>Corporate Banking</option>
                                <option>Wealth Management</option>
                                <option>Institutional</option>
                            </select>
                        </div>

                        {/* Occupation */}
                        <div className="space-y-2">
                            <Label htmlFor="occupation" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Briefcase className="w-3 h-3" /> Occupation
                            </Label>
                            <Input 
                                id="occupation"
                                value={data.occupation}
                                onChange={e => setData('occupation', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                        </div>

                        {/* Address */}
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <MapPin className="w-3 h-3" /> Residential Address
                            </Label>
                            <Input 
                                id="address"
                                value={data.address}
                                onChange={e => setData('address', e.target.value)}
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                        </div>
                    </div>

                    <div className="pt-10 flex justify-end gap-4">
                        <Button 
                            type="submit" 
                            disabled={processing}
                            className="px-12 py-6 bg-brand-navy text-white font-bold tracking-[0.2em] uppercase hover:bg-brand-blue transition-all rounded-none shadow-lg flex items-center gap-3"
                        >
                            <Save className="w-4 h-4" />
                            {processing ? 'Saving Changes...' : 'Update Member Record'}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

