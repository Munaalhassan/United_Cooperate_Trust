import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
}

/**
 * A reusable component for optimized image loading.
 * Automatically handles lazy loading, async decoding, and priority hints.
 */
export function OptimizedImage({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    loading,
    ...props
}: OptimizedImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            // If priority is true, we want eager loading and high fetch priority
            loading={priority ? 'eager' : (loading || 'lazy')}
            decoding="async"
            // @ts-ignore - fetchPriority is a relatively new attribute
            fetchPriority={priority ? 'high' : 'auto'}
            className={cn(
                "max-w-full h-auto", // Default responsive classes
                className
            )}
            {...props}
        />
    );
}
