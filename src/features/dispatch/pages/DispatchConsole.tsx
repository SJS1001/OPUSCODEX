const technicians = [
  { name: 'Marcus Vega', status: 'On Route', skills: ['Install', 'VRF'], capacity: '2/4' },
  { name: 'Priya Kale', status: 'Working', skills: ['Service', 'IAQ'], capacity: '1/3' },
  { name: 'Crew 4', status: 'Available', skills: ['Maintenance'], capacity: '0/5' }
];

export const DispatchConsole = () => (
  <section className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold text-navy">Dispatch Console</h2>
      <p className="text-sm text-slate-500">Drag a job tile to a technician to assign.</p>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {technicians.map((tech) => (
        <article key={tech.name} className="rounded-3xl bg-white/80 p-4 shadow-soft-lg">
          <header className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-navy">{tech.name}</h3>
            <span className="text-xs text-slate-400">{tech.capacity} jobs</span>
          </header>
          <p className="text-sm text-teal">{tech.status}</p>
          <p className="text-xs text-slate-500">{tech.skills.join(', ')}</p>
        </article>
      ))}
    </div>
  </section>
);
