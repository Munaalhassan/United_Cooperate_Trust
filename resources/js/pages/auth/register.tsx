import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, Calendar, Globe, Shield, Lock, Upload, RefreshCw, ChevronRight } from 'lucide-react';

// ── Reusable Field Components ────────────────────────────────────────────────

function FieldGroup({ label, error, icon: Icon, children }: {
    label: string;
    error?: string;
    icon?: React.ElementType;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                {Icon && <Icon className="w-3 h-3" />}
                {label}
            </label>
            {children}
            {error && <InputError message={error} className="text-xs mt-0.5" />}
        </div>
    );
}

const inputCls = "w-full border-0 border-b-2 border-slate-200 focus:border-brand-blue focus:ring-0 px-0 py-2.5 bg-transparent transition-colors text-slate-800 text-sm font-medium outline-none placeholder:text-slate-300";
const selectCls = "w-full border-0 border-b-2 border-slate-200 focus:border-brand-blue focus:ring-0 px-0 py-2.5 bg-transparent transition-colors text-slate-800 text-sm font-medium outline-none appearance-none cursor-pointer";

// ── Section Divider ──────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3 pt-4">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</span>
            <div className="h-px flex-1 bg-slate-100" />
        </div>
    );
}

// ── Country List ─────────────────────────────────────────────────────────────

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

// ── Main Component ────────────────────────────────────────────────────────────

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: 'Male',
        dob: '',
        country: '',
        ssn: '',
        dl: '',
        username: '',
        password: '',
        password_confirmation: '',
        dl_upload: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register', {
            onSuccess: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register — United Cooperate Trust Bank" />

            <form onSubmit={submit} className="space-y-12">

                {/* ── Personal Information ── */}
                <div className="space-y-6">
                    <SectionLabel label="Personal Information" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldGroup label="First Name" error={errors.first_name} icon={User}>
                            <input
                                type="text"
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                className={inputCls}
                                placeholder="e.g. John"
                                required
                            />
                        </FieldGroup>
                        <FieldGroup label="Last Name" error={errors.last_name} icon={User}>
                            <input
                                type="text"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                className={inputCls}
                                placeholder="e.g. Doe"
                                required
                            />
                        </FieldGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldGroup label="Email Address" error={errors.email} icon={Mail}>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className={inputCls}
                                placeholder="you@example.com"
                                required
                            />
                        </FieldGroup>

                        <FieldGroup label="Phone Number" error={errors.phone} icon={Phone}>
                            <input
                                type="tel"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                className={inputCls}
                                placeholder="+1 (555) 000-0000"
                                required
                            />
                        </FieldGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FieldGroup label="Gender" error={errors.gender}>
                            <div className="relative">
                                <select
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className={selectCls}
                                    required
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 w-3 h-3 text-slate-400 pointer-events-none" />
                            </div>
                        </FieldGroup>
                        <FieldGroup label="Date of Birth" error={errors.dob} icon={Calendar}>
                            <input
                                type="date"
                                value={data.dob}
                                onChange={(e) => setData('dob', e.target.value)}
                                className={inputCls}
                                required
                            />
                        </FieldGroup>
                        <FieldGroup label="Country" error={errors.country} icon={Globe}>
                            <div className="relative">
                                <select
                                    value={data.country}
                                    onChange={(e) => setData('country', e.target.value)}
                                    className={selectCls}
                                    required
                                >
                                    <option value="" disabled>Select...</option>
                                    {countries.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                                <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 w-3 h-3 text-slate-400 pointer-events-none" />
                            </div>
                        </FieldGroup>
                    </div>
                </div>

                {/* ── Identification ── */}
                <div className="space-y-6">
                    <SectionLabel label="Identity Verification" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldGroup label="Social Security No." error={errors.ssn} icon={Shield}>
                            <input
                                type="text"
                                value={data.ssn}
                                onChange={(e) => setData('ssn', e.target.value)}
                                className={inputCls}
                                placeholder="XXX-XX-XXXX"
                                required
                            />
                        </FieldGroup>
                        <FieldGroup label="Driver's License No." error={errors.dl} icon={Shield}>
                            <input
                                type="text"
                                value={data.dl}
                                onChange={(e) => setData('dl', e.target.value)}
                                className={inputCls}
                                placeholder="DL-XXXXXXXX"
                                required
                            />
                        </FieldGroup>
                    </div>

                    <FieldGroup label="Upload Front of Driver's License" error={errors.dl_upload as string} icon={Upload}>
                        <label className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-none bg-slate-50 hover:bg-slate-100 hover:border-brand-blue transition-all cursor-pointer group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 text-slate-300 group-hover:text-brand-blue mb-2 transition-colors" />
                                <p className="text-sm text-slate-500 font-medium">
                                    {data.dl_upload ? data.dl_upload.name : 'Click to upload or drag and drop'}
                                </p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">PNG, JPG or PDF</p>
                            </div>
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => setData('dl_upload', e.target.files?.[0] || null)}
                                className="sr-only"
                            />
                        </label>
                    </FieldGroup>
                </div>

                {/* ── Account Credentials ── */}
                <div className="space-y-6">
                    <SectionLabel label="Account Security" />

                    <FieldGroup label="Desired Username" error={errors.username} icon={User}>
                        <input
                            type="text"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className={inputCls}
                            placeholder="e.g. john.doe.bank"
                            required
                        />
                    </FieldGroup>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldGroup label="Password" error={errors.password} icon={Lock}>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className={inputCls}
                                placeholder="••••••••"
                                required
                            />
                        </FieldGroup>
                        <FieldGroup label="Confirm Password" error={errors.password_confirmation} icon={Lock}>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className={inputCls}
                                placeholder="••••••••"
                                required
                            />
                        </FieldGroup>
                    </div>
                </div>

                {/* ── Actions ── */}
                <div className="pt-8 space-y-4">
                    <Button
                        type="submit"
                        disabled={processing}
                        className="w-full py-6 text-xs font-extrabold uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-3 disabled:opacity-60 shadow-xl rounded-none"
                    >
                        {processing ? <Spinner className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                        {processing ? 'Processing Application…' : 'Finalize Registration'}
                    </Button>
                    
                    <button
                        type="button"
                        onClick={() => reset()}
                        disabled={processing}
                        className="w-full flex items-center justify-center gap-2 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-brand-blue transition-colors"
                    >
                        <RefreshCw className="w-3 h-3" />
                        Clear Form Data
                    </button>
                </div>

                {/* ── Login Link ── */}
                <div className="text-center text-sm text-slate-500 pt-4 border-t border-slate-100">
                    Already have an account?{' '}
                    <Link href={login()} className="text-brand-blue font-bold hover:text-brand-navy transition-colors">
                        Log in here
                    </Link>
                </div>

            </form>
        </>
    );
}

Register.layout = {
    title: 'Register Account',
    description: 'Open your United Cooperate Trust account today.',
};
