import { Button } from '@components/ui/Button.tsx';

const jobs = [
  { id: 'JOB-1048', status: 'En Route', technician: 'Marcus Vega', eta: '12:40p' },
  { id: 'JOB-1049', status: 'In Progress', technician: 'Priya Kale', eta: '2:15p' },
  { id: 'JOB-1050', status: 'Scheduled', technician: 'Maintenance Crew', eta: '4:00p' }
];

export const JobBoard = () => (
  <section className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-navy">Jobs & Work Orders</h2>
        <p className="text-sm text-slate-500">Live status across the field.</p>
      </div>
      <Button>Dispatch job</Button>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {jobs.map((job) => (
        <article key={job.id} className="rounded-3xl bg-white/80 p-4 shadow-soft-lg">
          <p className="text-sm text-slate-400">{job.id}</p>
          <h3 className="text-xl font-semibold text-navy">{job.technician}</h3>
          <p className="text-sm text-teal">{job.status}</p>
          <p className="text-xs text-slate-500">ETA {job.eta}</p>
        </article>
      ))}
    </div>
  </section>
);
