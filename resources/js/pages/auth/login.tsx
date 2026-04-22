import { Form, Head, Link } from '@inertiajs/react';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <>
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="space-y-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="space-y-5">
                            {/* Email Field */}
                            <div className="group space-y-2">
                                <Label htmlFor="email" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Mail className="w-3.5 h-3.5" /> Email Address
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                        className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 rounded-none px-4 transition-all"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            {/* Password Field */}
                            <div className="group space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Lock className="w-3.5 h-3.5" /> Password
                                    </Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="relative">
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-brand-blue focus:ring-0 rounded-none px-4 transition-all"
                                    />
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                        className="rounded-none border-slate-300 text-brand-blue focus:ring-brand-blue"
                                    />
                                    <Label htmlFor="remember" className="text-sm text-slate-500 font-medium cursor-pointer">Remember my device</Label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-8 text-xs uppercase tracking-[0.2em] font-extrabold transition-all shadow-xl rounded-none"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing ? <Spinner className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                                {processing ? 'Authorizing...' : 'SECURE ACCESS'}
                            </Button>
                        </div>

                        {canRegister && (
                            <div className="text-center text-sm text-slate-500 mt-10 pt-8 border-t border-slate-100 flex flex-col gap-4">
                                <p>Don't have a membership yet?</p>
                                <Link 
                                    href={register.url()} 
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-blue text-brand-blue font-bold text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all duration-300"
                                >
                                    UCT Bank Member
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </Form>

            {status && (
                <div className="mt-4 p-4 text-center text-sm font-bold text-green-700 bg-green-50 border border-green-200 rounded-sm">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
