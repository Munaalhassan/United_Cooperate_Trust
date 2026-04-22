import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ChevronLeft, Save, User, Mail, Phone, Globe, Briefcase, MapPin, Landmark, Lock, Zap, Calendar, Fingerprint, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { store as memStore, index as memIndex } from '@/routes/system/mgt/memberships';

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

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: 'Male',
        dob: '',
        nationality: '',
        ssn: '',
        dl: '',
        username: '',
        password: '',
        account_type: 'Private Banking',
        occupation: '',
        address: '',
        dl_upload: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(memStore.url(), {
            onSuccess: () => {
            },
        });
    };

    return (
        <AdminLayout title="Add New Member">
            <Head title="Add New Member | Admin Portal" />

            <div className="mb-8">
                <Link 
                    href={memIndex.url()} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-brand-blue transition-colors mb-4"
                >
                    <ChevronLeft className="w-4 h-4" /> Back to Memberships
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Add New Member</h1>
                <p className="text-slate-500 text-sm">Manually create a new bank membership record.</p>
            </div>

            <div className="bg-white shadow-sm border border-slate-100 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl">
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
                                placeholder="Enter first name"
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
                                placeholder="Enter last name"
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
                                placeholder="client@example.com"
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
                                placeholder="+1 (555) 000-0000"
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
                            {errors.gender && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.gender}</p>}
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
                                <Globe className="w-3 h-3" /> Select Country
                            </Label>
                            <select 
                                id="nationality"
                                value={data.nationality}
                                onChange={e => setData('nationality', e.target.value)}
                                className="w-full h-11 border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
                            >
                                <option value="">Choose...</option>
                                {countries.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            {errors.nationality && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.nationality}</p>}
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
                                placeholder="Social Security Number"
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.ssn && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.ssn}</p>}
                        </div>

                        {/* DL */}
                        <div className="space-y-2">
                            <Label htmlFor="dl" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <FileText className="w-3 h-3" /> DL
                            </Label>
                            <Input 
                                id="dl"
                                value={data.dl}
                                onChange={e => setData('dl', e.target.value)}
                                placeholder="Driver's License Number"
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.dl && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dl}</p>}
                        </div>

                        {/* DL Upload */}
                        <div className="space-y-2">
                            <Label htmlFor="dl_upload" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Upload className="w-3 h-3" /> Upload DL (Optional)
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
                                        {data.dl_upload ? data.dl_upload.name : 'Choose file...'}
                                    </span>
                                    <Upload className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
                                </label>
                            </div>
                            {errors.dl_upload && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dl_upload}</p>}
                        </div>

                        {/* Security Header */}
                        <div className="md:col-span-2 pt-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue border-b border-slate-100 pb-2">Account Security</h2>
                        </div>

                        {/* Username */}
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <User className="w-3 h-3" /> User-name
                            </Label>
                            <Input 
                                id="username"
                                value={data.username}
                                onChange={e => setData('username', e.target.value)}
                                placeholder="Assigned username"
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.username && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.username}</p>}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Lock className="w-3 h-3" /> Initial Password
                            </Label>
                            <Input 
                                id="password"
                                type="text"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                placeholder="Assign a temporary password"
                                className="h-11 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0"
                            />
                            {errors.password && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.password}</p>}
                        </div>

                        {/* Professional Header */}
                        <div className="md:col-span-2 pt-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue border-b border-slate-100 pb-2">Professional Details</h2>
                        </div>

                        {/* Account Type */}
                        <div className="space-y-2">
                            <Label htmlFor="interest_type" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Landmark className="w-3 h-3" /> Interest Type
                            </Label>
                            <select 
                                id="interest_type"
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
                                placeholder="Professional role"
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
                                placeholder="Full address"
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
                            {processing ? 'Saving...' : 'Save Member'}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
