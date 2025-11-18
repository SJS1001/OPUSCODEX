import { ReactNode } from 'react';

interface Props {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
}

export const KpiCard = ({ label, value, delta, icon }: Props) => (
  <article className="flex flex-col gap-2 rounded-3xl bg-white/80 p-4 shadow-soft-lg">
    <div className="flex items-center justify-between text-xs uppercase text-slate-400">
      <span>{label}</span>
      {icon}
    </div>
    <p className="text-3xl font-semibold text-navy">{value}</p>
    {delta && <p className="text-sm text-teal">{delta}</p>}
  </article>
);
