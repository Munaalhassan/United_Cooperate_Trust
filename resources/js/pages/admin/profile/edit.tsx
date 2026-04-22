import React from 'react';
import AdminLayout from '@/layouts/admin-layout';
import { motion } from 'framer-motion';
import { 
    User, 
    Mail, 
    Lock, 
    ShieldCheck, 
    Save,
    AlertCircle,
    CheckCircle2
} from 'lucide-react';
import { useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { edit as profileEdit, update as profileUpdate } from '@/routes/system/mgt/profile';
import { update as passwordUpdate } from '@/routes/system/mgt/password';

interface Admin {
    id: number;
    name: string;
    email: string;
}

interface Props {
    admin: Admin;
}

export default function ProfileEdit({ admin }: Props) {
    const { flash } = usePage().props as any;

    const profileForm = useForm({
        name: admin.name,
        email: admin.email,
    });

    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updateProfile = (e: React.FormEvent) => {
        e.preventDefault();
        profileForm.patch(profileUpdate.url(), {
            preserveScroll: true,
        });
    };

    const updatePass = (e: React.FormEvent) => {
        e.preventDefault();
        passwordForm.put(passwordUpdate.url(), {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset();
            },
        });
    };

    return (
        <AdminLayout title="Admin Profile">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Profile Header */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:col-span-1"
                    >
                        <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm text-center">
                            <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg shadow-brand-blue/20">
                                {admin?.name?.charAt(0).toUpperCase() || 'A'}
                            </div>
                            <h2 className="text-xl font-bold text-brand-navy mb-1">{admin.name}</h2>
                            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">System Administrator</p>
                            
                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                                <ShieldCheck className="w-3 h-3" /> Master Access
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-sm">
                            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-4">Security Tip</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Ensure your password is at least 12 characters long and contains a mix of numbers and symbols for maximum security.
                            </p>
                        </div>
                    </motion.div>

                    {/* Forms Column */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Profile Info */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 border border-slate-200 shadow-sm rounded-sm"
                        >
                            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
                                <User className="w-5 h-5 text-brand-blue" />
                                <h3 className="text-lg font-bold text-brand-navy">Profile Information</h3>
                            </div>

                            <form onSubmit={updateProfile} className="space-y-8">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</Label>
                                    <div className="relative">
                                        <Input 
                                            id="name"
                                            value={profileForm.data.name}
                                            onChange={e => profileForm.setData('name', e.target.value)}
                                            className="pl-10 h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10"
                                        />
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                    {profileForm.errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{profileForm.errors.name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</Label>
                                    <div className="relative">
                                        <Input 
                                            id="email"
                                            type="email"
                                            value={profileForm.data.email}
                                            onChange={e => profileForm.setData('email', e.target.value)}
                                            className="pl-10 h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10"
                                        />
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                    {profileForm.errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{profileForm.errors.email}</p>}
                                </div>

                                <div className="flex justify-end pt-4">
                                    <Button 
                                        type="submit" 
                                        disabled={profileForm.processing}
                                        className="bg-brand-navy hover:bg-brand-blue text-white rounded-none h-12 px-8 font-bold uppercase tracking-widest transition-all gap-2"
                                    >
                                        <Save className="w-4 h-4" /> 
                                        {profileForm.processing ? 'Saving...' : 'Update Profile'}
                                    </Button>
                                </div>
                            </form>
                        </motion.section>

                        {/* Security Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 border border-slate-200 shadow-sm rounded-sm"
                        >
                            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
                                <Lock className="w-5 h-5 text-brand-blue" />
                                <h3 className="text-lg font-bold text-brand-navy">Update Password</h3>
                            </div>

                            <form onSubmit={updatePass} className="space-y-8">
                                <div className="space-y-2">
                                    <Label htmlFor="current_password" className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Password</Label>
                                    <div className="relative">
                                        <Input 
                                            id="current_password"
                                            type="password"
                                            value={passwordForm.data.current_password}
                                            onChange={e => passwordForm.setData('current_password', e.target.value)}
                                            className="pl-10 h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10"
                                        />
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                    {passwordForm.errors.current_password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{passwordForm.errors.current_password}</p>}
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-slate-400">New Password</Label>
                                        <div className="relative">
                                            <Input 
                                                id="password"
                                                type="password"
                                                value={passwordForm.data.password}
                                                onChange={e => passwordForm.setData('password', e.target.value)}
                                                className="pl-10 h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10"
                                            />
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        </div>
                                        {passwordForm.errors.password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{passwordForm.errors.password}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation" className="text-xs font-bold uppercase tracking-widest text-slate-400">Confirm Password</Label>
                                        <div className="relative">
                                            <Input 
                                                id="password_confirmation"
                                                type="password"
                                                value={passwordForm.data.password_confirmation}
                                                onChange={e => passwordForm.setData('password_confirmation', e.target.value)}
                                                className="pl-10 h-12 rounded-none border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10"
                                            />
                                            <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <Button 
                                        type="submit" 
                                        disabled={passwordForm.processing}
                                        className="bg-brand-blue hover:bg-brand-navy text-white rounded-none h-12 px-8 font-bold uppercase tracking-widest transition-all gap-2 shadow-lg shadow-brand-blue/20"
                                    >
                                        <ShieldCheck className="w-4 h-4" /> 
                                        {passwordForm.processing ? 'Updating...' : 'Change Password'}
                                    </Button>
                                </div>
                            </form>
                        </motion.section>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
