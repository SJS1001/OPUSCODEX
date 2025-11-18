import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export const SearchInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative">
    <input
      type="search"
      className={clsx(
        'w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 pl-10 text-sm text-slate-700 shadow-soft-lg placeholder:text-slate-400',
        className
      )}
      {...props}
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
  </div>
);
