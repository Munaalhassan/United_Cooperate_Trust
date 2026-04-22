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
            title: data.type === 'success' ? 'Success!' : 'Notification',
            text: data.message,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            customClass: {
                popup: 'rounded-none border-brand-blue border-l-4',
            }
        });
    }, [flash]);
}
