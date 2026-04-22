import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
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

            <form onSubmit={submit} className="space-y-5">

                {/* ── Personal Information ── */}
                <SectionLabel label="Personal Information" />

                <div className="grid grid-cols-2 gap-4">
                    <FieldGroup label="First Name" error={errors.first_name} icon={User}>
                        <input
                            type="text"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                            className={inputCls}
                            placeholder="John"
                            required
                        />
                    </FieldGroup>
                    <FieldGroup label="Last Name" error={errors.last_name} icon={User}>
                        <input
                            type="text"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            className={inputCls}
                            placeholder="Doe"
                            required
                        />
                    </FieldGroup>
                </div>

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

                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <FieldGroup label="Country of Residence" error={errors.country} icon={Globe}>
                    <div className="relative">
                        <select
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                            className={selectCls}
                            required
                        >
                            <option value="" disabled>Select your country...</option>
                            {countries.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 w-3 h-3 text-slate-400 pointer-events-none" />
                    </div>
                </FieldGroup>

                {/* ── Identification ── */}
                <SectionLabel label="Identification" />

                <div className="grid grid-cols-2 gap-4">
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

                {/* File Upload */}
                <FieldGroup label="Upload Driver's License (Front)" error={errors.dl_upload as string} icon={Upload}>
                    <label className="mt-1 flex items-center gap-3 cursor-pointer group">
                        <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                            <Upload className="w-3.5 h-3.5" />
                            Choose File
                        </div>
                        <span className="text-sm text-slate-400 truncate">
                            {data.dl_upload ? data.dl_upload.name : 'No file chosen'}
                        </span>
                        <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => setData('dl_upload', e.target.files?.[0] || null)}
                            className="sr-only"
                        />
                    </label>
                </FieldGroup>

                {/* ── Account Credentials ── */}
                <SectionLabel label="Account Credentials" />

                <FieldGroup label="Username" error={errors.username} icon={User}>
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        className={inputCls}
                        placeholder="Choose a unique username"
                        required
                    />
                </FieldGroup>

                <div className="grid grid-cols-2 gap-4">
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

                {/* ── Actions ── */}
                <div className="pt-4 space-y-3">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-brand-navy hover:bg-brand-blue text-white py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {processing ? <Spinner /> : null}
                        {processing ? 'Creating Account…' : 'Create My Account'}
                    </button>
                    <button
                        type="button"
                        onClick={() => reset()}
                        disabled={processing}
                        className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <RefreshCw className="w-3 h-3" />
                        Clear Form
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
