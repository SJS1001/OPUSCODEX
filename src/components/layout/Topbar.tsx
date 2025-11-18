import { useThemeStore } from '@app/stores/useThemeStore.ts';

export const Topbar = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="flex items-center justify-between gap-4 rounded-3xl bg-white/70 px-6 py-3 shadow-soft-lg backdrop-blur">
      <div>
        <p className="text-xs uppercase text-slate-400">Today</p>
        <p className="text-lg font-semibold text-slate-800">Operations Pulse</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-teal hover:text-teal"
        >
          {theme === 'light' ? 'Enable dark' : 'Enable light'} mode
        </button>
        <div className="size-10 rounded-full bg-gradient-to-r from-navy to-teal text-center text-white">OP</div>
      </div>
    </header>
  );
};
