import { PublicHeader } from '@/components/public-header';
import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased">
            <PublicHeader />
            <main className="relative">
                {children}
            </main>
            {/* Footer will be added in a separate task */}
            <footer className="bg-brand-navy text-white/60 py-12 px-4 border-t border-white/10 mt-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img src="/images/logo.png" alt="United Cooperate Bank" className="h-10 w-auto mb-6 brightness-0 invert" />
                        <p className="text-sm">A global leader in sustainable banking and private wealth management.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Banking</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Private Banking</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Corporate Banking</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Digital Portals</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Information</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fees & Rates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">ATM Locator</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs">
                    © {new Date().getFullYear()} United Cooperate Bank. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
