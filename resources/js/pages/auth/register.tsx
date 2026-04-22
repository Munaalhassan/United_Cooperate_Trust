import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';

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

    const handleReset = () => {
        reset();
    };

    const inputClass = "w-full border-0 border-b border-slate-400 focus:border-brand-blue focus:ring-0 px-0 py-2 bg-transparent transition-colors text-slate-800 placeholder:text-transparent";
    const labelClass = "text-sm font-medium text-slate-600 mb-1";

    return (
        <>
            <Head title="Register" />
            
            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid gap-6">
                    
                    <div className="grid gap-0 relative">
                        <label className={labelClass}>First Name</label>
                        <input
                            type="text"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.first_name} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Last Name</label>
                        <input
                            type="text"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.last_name} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.email} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Phone</label>
                        <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.phone} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Gender</label>
                        <select
                            value={data.gender}
                            onChange={(e) => setData('gender', e.target.value)}
                            className={inputClass}
                            required
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <InputError message={errors.gender} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>DOB</label>
                        <input
                            type="date"
                            value={data.dob}
                            onChange={(e) => setData('dob', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.dob} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Select Country</label>
                        <select
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                            className={inputClass}
                            required
                        >
                            <option value="" disabled>Choose...</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="EU">Europe</option>
                        </select>
                        <InputError message={errors.country} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>SSN</label>
                        <input
                            type="text"
                            value={data.ssn}
                            onChange={(e) => setData('ssn', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.ssn} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>DL</label>
                        <input
                            type="text"
                            value={data.dl}
                            onChange={(e) => setData('dl', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.dl} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>User-name</label>
                        <input
                            type="text"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.username} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.password} className="mt-1" />
                    </div>

                    <div className="grid gap-0 relative">
                        <label className={labelClass}>Confirm Password</label>
                        <input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className={inputClass}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-1" />
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <label className="text-sm font-medium text-slate-600">Upload DL Front/Bank</label>
                        <input
                            type="file"
                            onChange={(e) => setData('dl_upload', e.target.files?.[0] || null)}
                            className="text-sm text-slate-500 file:mr-4 file:py-1 file:px-3 file:border file:border-slate-300 file:text-sm file:font-medium file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100 transition-colors w-full"
                        />
                    </div>
                    <InputError message={errors.dl_upload as string} className="mt-1" />

                    <div className="flex flex-col gap-4 mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full px-6 py-3 border border-slate-400 text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                        >
                            {processing && <Spinner />}
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            disabled={processing}
                            className="w-full px-6 py-3 border border-slate-400 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                        >
                            Reset
                        </button>
                    </div>

                    <div className="text-sm text-slate-500 mt-6 pt-6 border-t border-slate-100">
                        Already have an account?{' '}
                        <Link href={login()} className="text-brand-blue font-bold hover:text-brand-navy">
                            Log in
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

Register.layout = {
    title: 'Register Account',
    description: 'Please fill out all fields carefully.',
};
