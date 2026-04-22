import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, User, Mail, Phone, Globe, Briefcase, MapPin, Landmark, Lock, Zap, Calendar, Fingerprint, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { register as registerRoute } from '@/routes';

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

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
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
        password_confirmation: '',
        account_type: 'Private Banking',
        occupation: '',
        address: '',
        dl_upload: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(registerRoute.url(), {
            onSuccess: () => {
                reset();
                toast.success('Membership application submitted successfully!');
            },
        });
    };

    return (
        <div className="bg-slate-50 min-h-screen py-20 px-6">
            <Head title="Membership Application | United Cooperate Trust Bank" />

            <div className="max-w-4xl mx-auto">
                
                <Link 
                    href="/login" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-brand-blue transition-colors mb-12"
                >
                    <ChevronLeft className="w-4 h-4" /> Back to Secure Login
                </Link>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4 uppercase">
                            UCT Bank Member
                        </h1>
                        <p className="text-slate-500 text-lg font-light max-w-xl">
                            Join our exclusive global financial network. Please provide your professional details to initiate your membership process.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                        <ShieldCheck className="w-3.5 h-3.5" /> Secure Application
                    </div>
                </div>

                <div className="bg-white shadow-2xl rounded-none border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-blue" />
                    
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
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
                                    placeholder="Enter your first name"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
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
                                    placeholder="Enter your last name"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
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
                                    placeholder="you@example.com"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
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
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
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
                                    className="w-full h-12 border border-slate-200 bg-slate-50/30 px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
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
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
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
                                    className="w-full h-12 border border-slate-200 bg-slate-50/30 px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
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
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
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
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
                                />
                                {errors.dl && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dl}</p>}
                            </div>

                            {/* DL Upload */}
                            <div className="space-y-2">
                                <Label htmlFor="dl_upload" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <Upload className="w-3 h-3" /> Upload DL Front/Back
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
                                        className="flex items-center justify-between w-full h-12 border border-slate-200 bg-slate-50/30 px-4 cursor-pointer hover:border-brand-blue transition-colors"
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
                                    placeholder="Choose a username"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
                                />
                                {errors.username && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.username}</p>}
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> Password
                                </Label>
                                <Input 
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
                                />
                                {errors.password && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.password}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password_confirmation" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> Confirm Password
                                </Label>
                                <Input 
                                    id="password_confirmation"
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                    placeholder="••••••••"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
                                />
                                {errors.password_confirmation && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.password_confirmation}</p>}
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
                                    className="w-full h-12 border border-slate-200 bg-slate-50/30 px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-brand-blue"
                                >
                                    <option>Private Banking</option>
                                    <option>Corporate Banking</option>
                                    <option>Wealth Management</option>
                                    <option>Institutional</option>
                                </select>
                                {errors.account_type && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.account_type}</p>}
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
                                    placeholder="Current professional role"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
                                />
                                {errors.occupation && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.occupation}</p>}
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
                                    placeholder="Full residential address for verification"
                                    className="h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-0 bg-slate-50/30"
                                />
                                {errors.address && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.address}</p>}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Lock className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">End-to-end encryption</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Zap className="w-4 h-4 text-brand-blue" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Rapid review</span>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <Button 
                                    type="button"
                                    onClick={() => reset()}
                                    variant="outline"
                                    className="px-8 py-8 border-slate-200 text-slate-400 font-bold tracking-widest uppercase hover:bg-slate-50 transition-all rounded-none"
                                >
                                    Reset
                                </Button>
                                <Button 
                                    type="submit" 
                                    disabled={processing}
                                    className="flex-1 md:flex-none px-16 py-8 bg-brand-navy text-white font-bold tracking-[0.2em] uppercase hover:bg-brand-blue transition-all rounded-none shadow-xl"
                                >
                                    {processing ? 'Processing...' : 'Submit Application'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mt-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                    &copy; {new Date().getFullYear()} United Cooperate Trust Bank. All rights reserved.
                </div>
            </div>
        </>

    );
}
