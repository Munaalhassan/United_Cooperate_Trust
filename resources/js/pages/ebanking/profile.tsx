import { useState } from 'react';
import { Head, usePage, router, Link } from '@inertiajs/react';
import { Shield, Activity, User as UserIcon, Mail, Phone, Globe, Calendar, UserCircle, CreditCard, LogOut, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface User {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    country: string;
    gender: string;
    dob: string;
    username: string;
    account_number: string | null;
    account_confirmed_at: string | null;
}

export default function Profile() {
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const user = auth.user;

    const [showAccount, setShowAccount] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const maskedAccountNumber = user.account_number ? `${user.account_number.slice(0, 3)}*******` : 'Not generated';

    const handleVerifyPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setVerifying(true);
        setPasswordError('');
        try {
            const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            const response = await fetch('/ebanking/verify-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken, 'Accept': 'application/json' },
                body: JSON.stringify({ password })
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setShowAccount(true);
                setShowPasswordModal(false);
                setPassword('');
            } else if (data.errors?.password) {
                setPasswordError(data.errors.password[0]);
            } else {
                setPasswordError('An error occurred. Please try again.');
            }
        } catch {
            setPasswordError('An error occurred. Please try again.');
        } finally {
            setVerifying(false);
        }
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return '—';
        try { return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }); }
        catch { return dateStr; }
    };

    const profileFields = [
        { label: 'First Name', value: user.first_name || '—', icon: UserCircle },
        { label: 'Last Name', value: user.last_name || '—', icon: UserCircle },
        { label: 'Full Name', value: user.name || '—', icon: UserIcon },
        { label: 'Email Address', value: user.email || '—', icon: Mail },
        { label: 'Phone Number', value: user.phone || '—', icon: Phone },
        { label: 'Nationality', value: user.country || '—', icon: Globe },
        { label: 'Date of Birth', value: user.dob || '—', icon: Calendar },
        { label: 'Gender', value: user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : '—', icon: UserIcon },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
            <Head title="My Profile | Prestige Trust Bank" />

            {/* Header */}
            <header className="bg-brand-navy shadow-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8 text-brand-gold" />
                        <h1 className="text-xl font-extrabold text-white uppercase tracking-widest">Prestige Trust Bank</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest hidden md:inline-block">
                            {user?.first_name || user?.name}
                        </span>
                        <div className="h-10 w-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-extrabold shadow-lg">
                            {(user?.first_name?.[0] || user?.name?.[0] || 'P').toUpperCase()}
                        </div>
                        <button onClick={() => router.post('/logout')} className="text-slate-400 hover:text-white transition">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-10">
                {/* Sidebar */}
                <aside className="w-full md:w-64 space-y-2">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4">
                        <nav className="space-y-1">
                            <Link href="/ebanking/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-brand-navy transition rounded-md font-medium text-sm tracking-wide">
                                <Activity className="w-5 h-5" /> Dashboard
                            </Link>
                            <Link href="/ebanking/profile" className="flex items-center gap-3 px-4 py-3 bg-brand-navy/5 text-brand-navy dark:text-brand-gold rounded-md font-bold text-sm tracking-wide">
                                <UserIcon className="w-5 h-5" /> My Profile
                            </Link>
                        </nav>
                    </div>

                    {/* Account Card in Sidebar */}
                    {user.account_confirmed_at && (
                        <div className="bg-brand-navy rounded-lg p-5 shadow-xl border border-brand-navy/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-5">
                                <Shield size={80} className="text-brand-gold" />
                            </div>
                            <p className="text-brand-gold/80 text-[10px] uppercase tracking-widest mb-1 font-bold">Account Number</p>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="font-mono text-base tracking-widest text-white font-bold">
                                    {showAccount ? user.account_number : maskedAccountNumber}
                                </p>
                                <button
                                    onClick={() => showAccount ? setShowAccount(false) : setShowPasswordModal(true)}
                                    className="text-slate-400 hover:text-brand-gold transition"
                                    title={showAccount ? 'Hide' : 'Reveal'}
                                >
                                    {showAccount ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/10">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                    Account Active
                                </span>
                            </div>
                        </div>
                    )}
                </aside>

                {/* Main Content */}
                <main className="flex-1 space-y-6">
                    {/* Page Header */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
                            {(user?.first_name?.[0] || user?.name?.[0] || 'P').toUpperCase()}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                            <p className="text-sm text-slate-500 font-medium">{user.email}</p>
                            {user.account_confirmed_at && (
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                                    Verified Member
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-3">
                            <UserIcon className="w-4 h-4 text-brand-blue" />
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs">
                                Personal Information
                            </h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {profileFields.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4 text-brand-blue" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">{label}</p>
                                        <p className="font-semibold text-slate-900 dark:text-slate-100 capitalize">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Banking Information */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-3">
                            <CreditCard className="w-4 h-4 text-brand-blue" />
                            <h3 className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs">
                                Banking Details
                            </h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center flex-shrink-0">
                                    <CreditCard className="w-4 h-4 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Account Number</p>
                                    <div className="flex items-center gap-2">
                                        <p className="font-mono font-bold text-slate-900 dark:text-slate-100 tracking-widest">
                                            {user.account_number
                                                ? (showAccount ? user.account_number : maskedAccountNumber)
                                                : 'Not yet generated'}
                                        </p>
                                        {user.account_number && (
                                            <button
                                                onClick={() => showAccount ? setShowAccount(false) : setShowPasswordModal(true)}
                                                className="text-slate-400 hover:text-brand-navy transition"
                                                title={showAccount ? 'Hide Account Number' : 'Show Account Number'}
                                            >
                                                {showAccount ? <EyeOff size={14} /> : <Eye size={14} />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-4 h-4 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Account Status</p>
                                    {user.account_confirmed_at ? (
                                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Active & Confirmed
                                        </span>
                                    ) : user.account_number ? (
                                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600">
                                            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> Pending Confirmation
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400">
                                            <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" /> Not Generated
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-4 h-4 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Account Confirmed On</p>
                                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                                        {formatDate(user.account_confirmed_at)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-4 h-4 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Account Type</p>
                                    <p className="font-semibold text-slate-900 dark:text-slate-100">PTB Member Account</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Notice */}
                    <div className="bg-brand-navy rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                            <Lock className="w-5 h-5 text-brand-gold" />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm mb-1">Security & Privacy</p>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Your personal information is protected under strict confidentiality. Never share your account number or password with anyone. Prestige Trust Bank will never ask for your password.
                            </p>
                        </div>
                    </div>
                </main>
            </div>

            {/* Password Verification Modal */}
            <Dialog open={showPasswordModal} onOpenChange={setShowPasswordModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Lock className="w-5 h-5 text-brand-navy" /> Security Verification
                        </DialogTitle>
                        <DialogDescription>
                            Please enter your password to view your full account number.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleVerifyPassword} className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={passwordError ? 'border-red-500 focus-visible:ring-red-500' : ''}
                                required
                            />
                            {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setShowPasswordModal(false)} disabled={verifying}>
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-brand-navy hover:bg-brand-navy/90 text-white" disabled={verifying || !password}>
                                {verifying ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                Verify Password
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
