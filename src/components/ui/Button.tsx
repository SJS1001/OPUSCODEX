import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button = ({ variant = 'primary', className, ...props }: Props) => (
  <button
    className={clsx(
      'rounded-2xl px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal',
      {
        primary: 'bg-teal text-white shadow-soft-lg hover:bg-teal/90',
        secondary: 'bg-white text-navy border border-slate-200 hover:border-teal',
        ghost: 'text-slate-500 hover:text-teal'
      }[variant],
      className
    )}
    {...props}
  />
);
