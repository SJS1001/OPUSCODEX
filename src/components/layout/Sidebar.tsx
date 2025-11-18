import { NavLink, useParams } from 'react-router-dom';
import { mainNav } from '@app/utils/navigation.ts';

export const Sidebar = () => {
  const { companyId = 'atlas-hvac' } = useParams();

  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-6 bg-white/70 p-6 shadow-soft-lg backdrop-blur lg:flex">
      <div>
        <p className="text-xs uppercase text-slate-400">Workspace</p>
        <h1 className="text-2xl font-semibold text-navy">One Operation</h1>
      </div>
      <nav className="space-y-2">
        {mainNav.map((item) => (
          <NavLink
            key={item.path}
            to={`/${companyId}/${item.path}`}
            className={({ isActive }) =>
              `flex items-center justify-between rounded-2xl px-4 py-2 text-sm font-medium transition hover:bg-slate-100 ${
                isActive ? 'bg-navy text-white shadow-inner' : 'text-slate-600'
              }`
            }
          >
            {item.label}
            <span aria-hidden>→</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
