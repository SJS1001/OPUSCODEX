import { Outlet } from 'react-router-dom';
import { Sidebar } from '@components/layout/Sidebar.tsx';
import { Topbar } from '@components/layout/Topbar.tsx';

export const AppLayout = () => (
  <div className="flex min-h-screen bg-slate-100/70 p-4 text-slate-900">
    <Sidebar />
    <main className="flex w-full flex-col gap-4 lg:pl-4">
      <Topbar />
      <div className="rounded-3xl bg-slate-50/90 p-6 shadow-inner">
        <Outlet />
      </div>
    </main>
  </div>
);
