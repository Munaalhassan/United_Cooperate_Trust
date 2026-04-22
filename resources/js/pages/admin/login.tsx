import { Form, Head } from '@inertiajs/react';
import { Mail, Lock, ShieldAlert } from 'lucide-react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login as store } from '@/routes/system/mgt';
import AuthSimpleLayout from '@/layouts/auth/auth-simple-layout';

export default function AdminLogin({ status }: { status?: string }) {
    return (
        <div className="min-h-screen bg-brand-navy flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Head title="System Administration Login" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-10">
                    <img 
                        src="/images/logo.png" 
                        className="h-12 w-auto brightness-0 invert" 
                        alt="UCT Bank Admin" 
                    />
                </div>
                <h2 className="text-center text-2xl font-extrabold text-white tracking-tight uppercase">
                    Master Portal Access
                </h2>
                <p className="mt-2 text-center text-sm text-slate-400 font-medium tracking-wide">
                    Authorized Personnel Only
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md px-6">
                <div className="bg-white/5 backdrop-blur-xl py-12 px-10 border border-white/10 shadow-2xl">
                    <Form
                        {...store.post().form()}
                        resetOnSuccess={['password']}
                        className="space-y-8"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Mail className="w-3.5 h-3.5 text-brand-blue" /> Admin ID
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            placeholder="master.admin@uctbank.com"
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:bg-white/10 focus:border-brand-blue focus:ring-0 rounded-none px-4 transition-all"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Lock className="w-3.5 h-3.5 text-brand-blue" /> Security Key
                                        </Label>
                                        <PasswordInput
                                            id="password"
                                            name="password"
                                            required
                                            placeholder="••••••••••••"
                                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:bg-white/10 focus:border-brand-blue focus:ring-0 rounded-none px-4 transition-all"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            className="w-full py-8 bg-brand-blue hover:bg-white hover:text-brand-navy text-white text-xs uppercase tracking-[0.3em] font-extrabold transition-all rounded-none shadow-2xl"
                                            disabled={processing}
                                        >
                                            {processing ? <Spinner className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                                            {processing ? 'Decrypting...' : 'INITIALIZE ACCESS'}
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </Form>

                    {status && (
                        <div className="mt-8 p-4 text-center text-[11px] font-bold text-brand-blue bg-brand-blue/10 border border-brand-blue/20 uppercase tracking-widest">
                            {status}
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] leading-relaxed">
                        Security Notice: All access attempts are logged <br />
                        and monitored by global network defense.
                    </p>
                </div>
            </div>
        </div>
    );
}
