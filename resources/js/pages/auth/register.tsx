import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, User, Mail, Phone, Globe, Briefcase, MapPin, Landmark, Lock, Zap, Calendar, Fingerprint, FileText, Upload, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Swal from 'sweetalert2';
import { signup, store } from '@/routes/membership';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { home } from '@/routes';

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
        post(store.url(), {
            onSuccess: () => {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Application Submitted!',
                    text: 'Your membership application has been submitted successfully. Our team will review it and get back to you soon.',
                    confirmButtonColor: '#002855',
                    customClass: {
                        popup: 'rounded-xl',
                        confirmButton: 'rounded-lg px-8 py-3 font-bold uppercase tracking-widest text-xs'
                    }
                });
            },
        });
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            <Head title="Membership Application | United Cooperate Trust Bank" />

            {/* Navigation Header */}
            <div className="bg-white border-b border-slate-200 py-6 px-6 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href={home()} className="flex items-center gap-3">
                        <OptimizedImage 
                            src="/images/logo.png" 
                            alt="United Cooperate Trust Bank" 
                            width={220}
                            height={60}
                            priority={true}
                            className="h-10 w-auto" 
                        />
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                            <ShieldCheck className="w-4 h-4 text-brand-blue" /> 256-bit SSL Secure
                        </div>
                        <div className="h-4 w-px bg-slate-200" />
                        <Link 
                            href="/login" 
                            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand-blue transition-colors flex items-center gap-2"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
                        </Link>
                    </div>
                </div>
            </div>

            <main className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Page Title Section */}
                    <div className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-[9px] font-bold text-brand-blue uppercase tracking-widest mb-4">
                            <CheckCircle2 className="w-3 h-3" /> Official Membership Enrollment
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 uppercase italic">
                            UCT Bank Member <span className="text-brand-blue not-italic">.</span>
                        </h1>
                        <p className="text-slate-500 text-lg font-light max-w-2xl leading-relaxed">
                            Complete your enrollment to access premium offshore banking services, multi-currency accounts, and global wealth management solutions.
                        </p>
                    </div>

                    <div className="bg-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-xl border border-slate-100 overflow-hidden">
                        <form onSubmit={handleSubmit} className="divide-y divide-slate-100">
                            
                            {/* Personal Section */}
                            <div className="p-8 md:p-12 space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-bold text-brand-navy uppercase tracking-widest">Personal Identification</h2>
                                        <p className="text-xs text-slate-400 font-medium tracking-wide">Enter your legal information as it appears on your ID.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="first_name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">First Name</Label>
                                        <Input 
                                            id="first_name"
                                            value={data.first_name}
                                            onChange={e => setData('first_name', e.target.value)}
                                            placeholder="e.g. John"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.first_name && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.first_name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="last_name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Last Name</Label>
                                        <Input 
                                            id="last_name"
                                            value={data.last_name}
                                            onChange={e => setData('last_name', e.target.value)}
                                            placeholder="e.g. Doe"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.last_name && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.last_name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</Label>
                                        <Input 
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            placeholder="johndoe@domain.com"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone Number</Label>
                                        <Input 
                                            id="phone"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            placeholder="+1 (000) 000-0000"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.phone}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="gender" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Gender</Label>
                                        <select 
                                            id="gender"
                                            value={data.gender}
                                            onChange={e => setData('gender', e.target.value)}
                                            className="w-full h-12 rounded-lg border border-slate-200 bg-slate-50/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="dob" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Date of Birth</Label>
                                        <Input 
                                            id="dob"
                                            type="date"
                                            value={data.dob}
                                            onChange={e => setData('dob', e.target.value)}
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.dob && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dob}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Identity Section */}
                            <div className="p-8 md:p-12 space-y-10 bg-slate-50/30">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue border border-slate-100 shadow-sm">
                                        <Fingerprint className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-bold text-brand-navy uppercase tracking-widest">Global Identity</h2>
                                        <p className="text-xs text-slate-400 font-medium tracking-wide">Verification and residency details.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="nationality" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Nationality</Label>
                                        <select 
                                            id="nationality"
                                            value={data.nationality}
                                            onChange={e => setData('nationality', e.target.value)}
                                            className="w-full h-12 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none"
                                        >
                                            <option value="">Select your country</option>
                                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        {errors.nationality && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.nationality}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="ssn" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">SSN / National ID</Label>
                                        <Input 
                                            id="ssn"
                                            value={data.ssn}
                                            onChange={e => setData('ssn', e.target.value)}
                                            placeholder="Enter ID number"
                                            className="h-12 rounded-lg border-slate-200 bg-white focus:bg-white transition-all"
                                        />
                                        {errors.ssn && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.ssn}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="dl" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Driver's License #</Label>
                                        <Input 
                                            id="dl"
                                            value={data.dl}
                                            onChange={e => setData('dl', e.target.value)}
                                            placeholder="Enter license number"
                                            className="h-12 rounded-lg border-slate-200 bg-white focus:bg-white transition-all"
                                        />
                                        {errors.dl && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dl}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="dl_upload" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Upload DL Front/Back</Label>
                                        <div className="relative group">
                                            <input 
                                                type="file"
                                                id="dl_upload"
                                                onChange={e => {
                                                    const file = e.target.files?.[0] || null;
                                                    if (file && file.size > 5 * 1024 * 1024) {
                                                        Swal.fire({
                                                            icon: 'warning',
                                                            title: 'File Too Large',
                                                            text: 'The selected file is larger than 5MB. Please choose a smaller image.',
                                                            confirmButtonColor: '#002855',
                                                        });
                                                        e.target.value = '';
                                                        return;
                                                    }
                                                    setData('dl_upload', file);
                                                }}
                                                className="hidden"
                                            />
                                            <label 
                                                htmlFor="dl_upload"
                                                className="flex items-center justify-between w-full h-12 border border-slate-200 bg-white rounded-lg px-4 cursor-pointer hover:border-brand-blue hover:ring-2 hover:ring-brand-blue/5 transition-all"
                                            >
                                                <span className="text-sm text-slate-400 truncate">
                                                    {data.dl_upload ? data.dl_upload.name : 'Choose identification file...'}
                                                </span>
                                                <Upload className="w-4 h-4 text-slate-400 group-hover:text-brand-blue" />
                                            </label>
                                        </div>
                                        {errors.dl_upload && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.dl_upload}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Security Section */}
                            <div className="p-8 md:p-12 space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-bold text-brand-navy uppercase tracking-widest">Account Security</h2>
                                        <p className="text-xs text-slate-400 font-medium tracking-wide">Set up your secure access credentials.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="username" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Desired Username</Label>
                                        <Input 
                                            id="username"
                                            value={data.username}
                                            onChange={e => setData('username', e.target.value)}
                                            placeholder="Choose username"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.username && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.username}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Password</Label>
                                        <Input 
                                            id="password"
                                            type="password"
                                            value={data.password}
                                            onChange={e => setData('password', e.target.value)}
                                            placeholder="••••••••"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.password && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.password}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Confirm Password</Label>
                                        <Input 
                                            id="password_confirmation"
                                            type="password"
                                            value={data.password_confirmation}
                                            onChange={e => setData('password_confirmation', e.target.value)}
                                            placeholder="••••••••"
                                            className="h-12 rounded-lg border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
                                        />
                                        {errors.password_confirmation && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.password_confirmation}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Professional Details Section */}
                            <div className="p-8 md:p-12 space-y-10 bg-brand-navy/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm">
                                        <Landmark className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-bold text-brand-navy uppercase tracking-widest">Financial Profile</h2>
                                        <p className="text-xs text-slate-400 font-medium tracking-wide">Tell us about your financial background and interests.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="interest_type" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Interest Type</Label>
                                        <select 
                                            id="interest_type"
                                            value={data.account_type}
                                            onChange={e => setData('account_type', e.target.value)}
                                            className="w-full h-12 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none"
                                        >
                                            <option>Private Banking</option>
                                            <option>Corporate Banking</option>
                                            <option>Wealth Management</option>
                                            <option>Institutional</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="occupation" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Occupation</Label>
                                        <Input 
                                            id="occupation"
                                            value={data.occupation}
                                            onChange={e => setData('occupation', e.target.value)}
                                            placeholder="Professional role"
                                            className="h-12 rounded-lg border-slate-200 bg-white focus:bg-white transition-all"
                                        />
                                        {errors.occupation && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.occupation}</p>}
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Residential Address</Label>
                                        <Input 
                                            id="address"
                                            value={data.address}
                                            onChange={e => setData('address', e.target.value)}
                                            placeholder="Enter your full legal address"
                                            className="h-12 rounded-lg border-slate-200 bg-white focus:bg-white transition-all"
                                        />
                                        {errors.address && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.address}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Footer / Submit */}
                            <div className="p-8 md:p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-brand-blue">
                                        <ShieldCheck className="w-5 h-5" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest">GDPR & KYC Compliant</span>
                                    </div>
                                    <p className="text-[9px] text-slate-400 font-medium tracking-wider pl-7 uppercase">Data is encrypted and stored in secure Swiss-based servers.</p>
                                </div>
                                
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <Button 
                                        type="button"
                                        onClick={() => reset()}
                                        variant="ghost"
                                        className="h-14 px-8 text-slate-400 font-bold tracking-widest uppercase hover:text-brand-navy hover:bg-slate-50 transition-all"
                                    >
                                        Reset Form
                                    </Button>
                                    <Button 
                                        type="submit" 
                                        disabled={processing}
                                        className="flex-1 md:flex-none h-14 px-12 bg-brand-navy text-white font-bold tracking-[0.2em] uppercase hover:bg-brand-blue transition-all rounded-lg shadow-2xl shadow-brand-navy/20 active:scale-[0.98]"
                                    >
                                        {processing ? 'Processing...' : 'Complete Enrollment'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 text-center pb-12">
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                            Global Trust &middot; Secure Banking &middot; Professional Excellence
                        </p>
                        <div className="flex justify-center gap-4 opacity-40">
                            <OptimizedImage src="/images/tab.png" alt="Icon" width={20} height={20} className="grayscale" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
