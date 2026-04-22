import { usePage } from '@inertiajs/react';

export function useAsset() {
    const { props } = usePage();
    const assetUrl = (props.asset_url as string) || '';

    const asset = (path: string) => {
        // Remove leading slash if present
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${assetUrl}${cleanPath}`;
    };

    return { asset };
}
