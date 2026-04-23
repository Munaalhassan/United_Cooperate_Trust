import { router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import type { FlashToast } from '@/types/ui';

export function useFlashToast(): void {
    const { props } = usePage();
    const flash = (props as any).flash;

    useEffect(() => {
        let data: { type: 'success' | 'error' | 'info' | 'warning', message: string } | null = null;

        if (flash?.toast) {
            data = flash.toast;
        } else if (flash?.success) {
            data = { type: 'success', message: flash.success };
        } else if (flash?.error) {
            data = { type: 'error', message: flash.error };
        }

        if (!data) return;

        Swal.fire({
            icon: data.type,
            title: data.type === 'success' ? 'Success!' : 
                   data.type === 'error' ? 'Error!' : 'Notification',
            text: data.message,
            confirmButtonColor: '#002855',
            customClass: {
                popup: 'rounded-none',
                confirmButton: 'rounded-none px-8 py-3 font-bold uppercase tracking-widest text-[10px]',
            }
        });
    }, [flash]);
}
