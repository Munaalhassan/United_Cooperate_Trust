import React from 'react';
import { Head } from '@inertiajs/react';
import { useAsset } from '@/hooks/use-asset';

interface Member {
    id: number;
    first_name: string;
    last_name: string;
    dl_upload: string;
}

interface Props {
    member: Member;
}

export default function ViewId({ member }: Props) {
    const { asset } = useAsset();
    
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 md:p-10">
            <Head>
                <title>{`ID Document - ${member.first_name} ${member.last_name} | UCT Bank Admin`}</title>
                <link rel="icon" href="/images/tab.png" type="image/png" />
            </Head>

            {/* Header / Brand info */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <img src={asset('images/tab.png')} className="w-10 h-10 object-contain" alt="UCT Logo" />
                    <div>
                        <h1 className="text-white font-bold text-lg leading-none uppercase tracking-tight">Identification Document</h1>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Applicant: {member.first_name} {member.last_name} (ID: #{member.id})</p>
                    </div>
                </div>
                <button 
                    onClick={() => window.close()} 
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm"
                >
                    Close Window
                </button>
            </div>

            {/* Image Viewer */}
            <div className="w-full max-w-5xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 shadow-2xl flex items-center justify-center overflow-auto min-h-[70vh]">
                <img 
                    src={`/storage/${member.dl_upload}`} 
                    alt={`ID Document for ${member.first_name} ${member.last_name}`}
                    className="max-w-full h-auto shadow-2xl border border-white/5"
                />
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.4em]">United Cooperate Trust Bank | Document Security Systems</p>
            </div>
        </div>
    );
}
