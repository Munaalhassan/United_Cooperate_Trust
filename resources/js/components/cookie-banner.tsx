import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { X, Cookie, ChevronDown, ChevronUp, ShieldCheck, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'uct_cookie_consent';

interface CookieConsent {
    decided: boolean;
    essential: true;       // Always true — cannot be disabled
    functionality: boolean; // Google Translate (googtrans)
    performance: boolean;   // Google Fonts, page analytics
}

const defaultConsent: CookieConsent = {
    decided: false,
    essential: true,
    functionality: false,
    performance: false,
};

function loadConsent(): CookieConsent {
    try {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (stored) return { ...defaultConsent, ...JSON.parse(stored) };
    } catch {}
    return defaultConsent;
}

function saveConsent(consent: CookieConsent) {
    try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    } catch {}
}

/**
 * When functionality cookies are NOT allowed, remove the googtrans cookie
 * so Google Translate does not activate.
 */
function applyConsent(consent: CookieConsent) {
    if (!consent.functionality) {
        // Expire the googtrans cookie
        document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
}

export function CookieBanner() {
    const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showManage, setShowManage] = useState(false);

    useEffect(() => {
        const stored = loadConsent();
        setConsent(stored);
        if (!stored.decided) {
            // Small delay so it doesn't pop on first render paint
            const t = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(t);
        }
    }, []);

    const handleAcceptAll = () => {
        const updated: CookieConsent = { decided: true, essential: true, functionality: true, performance: true };
        saveConsent(updated);
        applyConsent(updated);
        setConsent(updated);
        setVisible(false);
    };

    const handleRejectAll = () => {
        const updated: CookieConsent = { decided: true, essential: true, functionality: false, performance: false };
        saveConsent(updated);
        applyConsent(updated);
        setConsent(updated);
        setVisible(false);
    };

    const handleSavePreferences = () => {
        const updated: CookieConsent = { ...consent, decided: true };
        saveConsent(updated);
        applyConsent(updated);
        setConsent(updated);
        setVisible(false);
    };

    const toggle = (key: 'functionality' | 'performance') => {
        setConsent(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!visible) return null;

    return (
        <AnimatePresence>
            {visible && (
                <>
                    {/* Backdrop (only when manage panel is open) */}
                    {showManage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 z-[9998]"
                            onClick={() => setShowManage(false)}
                        />
                    )}

                    {/* Main Banner */}
                    <motion.div
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-slate-200 shadow-2xl"
                    >
                        {/* Manage Panel (slides up above the bar) */}
                        <AnimatePresence>
                            {showManage && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden border-b border-slate-100 bg-slate-50"
                                >
                                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 max-h-[70vh] overflow-y-auto">
                                        <h3 className="text-xs sm:text-sm font-bold text-brand-navy uppercase tracking-widest mb-4 sm:mb-6">
                                            Manage Cookie Preferences
                                        </h3>
                                        <div className="space-y-3 sm:space-y-4">
                                            {/* Essential */}
                                            <CookieRow
                                                title="Essential Cookies"
                                                description="Required for the website to function. Includes Laravel session management and CSRF security tokens. Cannot be disabled."
                                                enabled={true}
                                                locked
                                                onToggle={() => {}}
                                            />
                                            {/* Functionality */}
                                            <CookieRow
                                                title="Functionality Cookies"
                                                description="Enables Google Translate to remember your language preference across pages (googtrans cookie). Disabling this will reset the site language to English on each visit."
                                                enabled={consent.functionality}
                                                onToggle={() => toggle('functionality')}
                                            />
                                            {/* Performance */}
                                            <CookieRow
                                                title="Performance Cookies"
                                                description="Allows loading fonts and resources from Google Fonts CDN. Helps us understand how pages are used to improve the experience."
                                                enabled={consent.performance}
                                                onToggle={() => toggle('performance')}
                                            />
                                        </div>
                                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                            <button
                                                onClick={handleSavePreferences}
                                                className="px-8 py-3 bg-brand-navy text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-colors text-center"
                                            >
                                                Save My Preferences
                                            </button>
                                            <button
                                                onClick={() => setShowManage(false)}
                                                className="text-[11px] sm:text-xs text-slate-400 hover:text-slate-600 transition-colors text-center py-2"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Banner Content */}
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-6">
                            {/* Icon + Text */}
                            <div className="flex items-start gap-3 sm:gap-4 flex-1">
                                <div className="mt-0.5 flex-shrink-0">
                                    <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm font-semibold text-brand-navy">
                                        This site uses cookies
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 leading-relaxed">
                                        We use essential, functionality, and performance cookies to operate this site and remember your language preference.{' '}
                                        <Link
                                            href="/legal/personal-data-notice"
                                            className="text-brand-blue hover:underline font-medium"
                                        >
                                            Read our Cookie Policy
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3 flex-shrink-0">
                                <div className="flex gap-2 flex-1 xs:flex-none">
                                    <button
                                        onClick={() => setShowManage(v => !v)}
                                        className="flex-1 xs:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 border border-slate-300 text-slate-600 text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:border-brand-blue hover:text-brand-blue transition-colors"
                                    >
                                        <Settings className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                        Manage
                                    </button>
                                    <button
                                        onClick={handleRejectAll}
                                        className="flex-1 xs:flex-none px-3 sm:px-4 py-2 border border-slate-300 text-slate-600 text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:border-slate-500 transition-colors"
                                    >
                                        Reject
                                    </button>
                                </div>
                                <button
                                    onClick={handleAcceptAll}
                                    className="w-full xs:w-auto px-6 py-2.5 sm:py-2 bg-brand-navy text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-colors flex items-center justify-center gap-2"
                                >
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Cookie Toggle Row ────────────────────────────────────────────────────────

function CookieRow({
    title,
    description,
    enabled,
    locked = false,
    onToggle,
}: {
    title: string;
    description: string;
    enabled: boolean;
    locked?: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-sm">
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-brand-navy">{title}</span>
                    {locked && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-0.5">
                            Always Active
                        </span>
                    )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
            </div>

            {/* Toggle */}
            <button
                onClick={onToggle}
                disabled={locked}
                className={`relative flex-shrink-0 mt-1 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                    enabled
                        ? locked ? 'bg-slate-300' : 'bg-brand-blue'
                        : 'bg-slate-200'
                } ${locked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label={`Toggle ${title}`}
            >
                <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                        enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
    );
}

/**
 * Hook — call this anywhere to read the current consent state
 * so the rest of the app can conditionally load third-party scripts.
 */
export function useCookieConsent(): CookieConsent {
    const [consent, setConsent] = useState<CookieConsent>(loadConsent);

    useEffect(() => {
        // Re-read whenever localStorage changes (e.g. another tab)
        const handler = () => setConsent(loadConsent());
        window.addEventListener('storage', handler);
        return () => window.removeEventListener('storage', handler);
    }, []);

    return consent;
}
