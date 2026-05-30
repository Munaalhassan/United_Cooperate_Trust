import { useState } from 'react';
import { Head, usePage, router, Link } from '@inertiajs/react';
import { Shield, CreditCard, Activity, ArrowRightLeft, Loader2, LogOut, User as UserIcon, Mail, Eye, EyeOff, Lock } from 'lucide-react';
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
    account_number: string | null;
    account_confirmed_at: string | null;
}

export default function Dashboard() {
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const user = auth.user;
    const [generating, setGenerating] = useState(false);

    // Password verification state
    const [showAccount, setShowAccount] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');
    const [verifying, setVerifying] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleGenerate = () => {
        setGenerating(true);
        router.post('/ebanking/generate-account', {}, {
            onFinish: () => setGenerating(false),
            preserveScroll: true
        });
    };

    const handleVerifyPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setVerifying(true);
        setPasswordError('');

        try {
            const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            const response = await fetch('/ebanking/verify-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json'
                },
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
        } catch (error: any) {
            setPasswordError('An error occurred. Please try again.');
        } finally {
            setVerifying(false);
        }
    };

    // Mask the account number (e.g., 412*******)
    const maskedAccountNumber = user.account_number ? `${user.account_number.slice(0, 3)}*******` : '';

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
            <Head title="E-Banking Dashboard | Prestige Trust Bank" />
            
            <header className="bg-brand-navy shadow-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8 text-brand-gold" />
                        <h1 className="text-xl font-extrabold text-white uppercase tracking-widest">Prestige Trust Bank</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest hidden md:inline-block">
                            Welcome, {user?.first_name || user?.name}
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
                            <Link href="/ebanking/dashboard" className="flex items-center gap-3 px-4 py-3 bg-brand-navy/5 text-brand-navy dark:text-brand-gold rounded-md font-bold text-sm tracking-wide">
                                <Activity className="w-5 h-5" /> Dashboard
                            </Link>
                            <Link href="/ebanking/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-brand-navy transition rounded-md font-medium text-sm tracking-wide">
                                <UserIcon className="w-5 h-5" /> My Profile
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {!user.account_number ? (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-10 text-center flex flex-col items-center justify-center">
                                <div className="w-20 h-20 bg-brand-navy/5 rounded-full flex items-center justify-center mb-6">
                                    <Shield className="w-10 h-10 text-brand-navy" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome to Prestige Trust Bank</h2>
                                <p className="text-slate-500 mb-8 max-w-md">
                                    Hi {user.first_name || user.name}, your application is approved! Click below to instantly generate your official account number and dispatch it to your email.
                                </p>
                                
                                <Button 
                                    onClick={handleGenerate}
                                    disabled={generating}
                                    className="h-14 px-8 bg-brand-navy hover:bg-brand-navy/90 text-white uppercase tracking-widest font-bold shadow-lg"
                                >
                                    {generating ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <CreditCard className="w-5 h-5 mr-2" />}
                                    {generating ? 'GENERATING...' : 'GENERATE ACCOUNT NUMBER'}
                                </Button>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                                <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-xs flex items-center gap-2">
                                        <UserIcon className="w-4 h-4 text-brand-gold" /> Membership Details
                                    </h3>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Full Name</p>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email Address</p>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">{user.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Phone Number</p>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">{user.phone}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Nationality</p>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">{user.country}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Date of Birth</p>
                                        <p className="font-medium text-slate-900 dark:text-slate-100">{user.dob}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Gender</p>
                                        <p className="font-medium text-slate-900 dark:text-slate-100 capitalize">{user.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : !user.account_confirmed_at ? (
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                            <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                                <Mail className="w-12 h-12 text-blue-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Check Your Inbox</h2>
                            <p className="text-slate-500 mb-2 max-w-md text-lg">
                                We've successfully generated your account number and sent it securely to your email address:
                            </p>
                            <p className="font-bold text-slate-800 dark:text-slate-200 mb-8">{user.email}</p>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-lg border border-slate-100 dark:border-slate-700 max-w-md">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Please click the confirmation link in the email to activate your dashboard and view your account details.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Account Balance Card */}
                            <div className="bg-brand-navy rounded-xl p-8 text-white shadow-xl relative overflow-hidden border border-brand-navy/20">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-brand-gold">
                                    <Shield size={160} />
                                </div>
                                
                                <div className="flex justify-between items-end pt-2">
                                    <div>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">Account Number</p>
                                        <div className="flex items-center gap-3">
                                            <p className="font-mono text-xl tracking-[0.2em] text-brand-gold">
                                                {showAccount ? user.account_number : maskedAccountNumber}
                                            </p>
                                            <button 
                                                onClick={() => showAccount ? setShowAccount(false) : setShowPasswordModal(true)}
                                                className="text-slate-400 hover:text-white transition p-1"
                                                title={showAccount ? "Hide Account Number" : "Show Account Number"}
                                            >
                                                {showAccount ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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
                            {passwordError && (
                                <p className="text-xs text-red-500">{passwordError}</p>
                            )}
                        </div>
                        
                        <DialogFooter>
                            <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => setShowPasswordModal(false)}
                                disabled={verifying}
                            >
                                Cancel
                            </Button>
                            <Button 
                                type="submit"
                                className="bg-brand-navy hover:bg-brand-navy/90 text-white"
                                disabled={verifying || !password}
                            >
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
