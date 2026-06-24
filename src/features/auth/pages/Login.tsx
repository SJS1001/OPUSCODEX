import { Button } from '@components/ui/Button.tsx';
import { FormEvent } from 'react';

export const Login = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert('Auth placeholder — wire up Supabase or .NET Identity.');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy via-slate-900 to-black p-6 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur"
      >
        <h1 className="mb-2 text-3xl font-semibold">Sign in</h1>
        <p className="mb-6 text-sm text-slate-200">Connect to the OPUS multi-tenant control plane.</p>
        <label className="mb-3 block text-sm text-slate-200">
          Email
          <input type="email" required className="mt-1 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-2" />
        </label>
        <label className="mb-6 block text-sm text-slate-200">
          Password
          <input type="password" required className="mt-1 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-2" />
        </label>
        <Button type="submit" className="w-full">Continue</Button>
      </form>
    </div>
  );
};
