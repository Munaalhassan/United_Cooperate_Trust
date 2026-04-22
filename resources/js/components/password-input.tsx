import { Eye, EyeOff } from 'lucide-react';
import type { ComponentProps, Ref } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function PasswordInput({
    className,
    ref,
    ...props
}: Omit<ComponentProps<'input'>, 'type'> & { ref?: Ref<HTMLInputElement> }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <Input
                type={showPassword ? 'text' : 'password'}
                className={cn('pr-10', className)}
                ref={ref}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-300 hover:text-brand-blue focus:outline-none transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
            >
                {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                ) : (
                    <Eye className="w-4 h-4" />
                )}
            </button>
        </div>
    );
}
