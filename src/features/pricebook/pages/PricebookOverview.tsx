const categories = [
  { name: 'Install · Heat Pumps', items: 48 },
  { name: 'Service · IAQ', items: 16 },
  { name: 'Maintenance · Memberships', items: 8 }
];

export const PricebookOverview = () => (
  <section className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold text-navy">PriceBook</h2>
      <p className="text-sm text-slate-500">Browse categories and configure labor/material mixes.</p>
    </div>
    <div className="space-y-3">
      {categories.map((category) => (
        <article key={category.name} className="flex items-center justify-between rounded-3xl bg-white/80 p-4 shadow-soft-lg">
          <div>
            <p className="text-lg font-semibold text-navy">{category.name}</p>
            <p className="text-sm text-slate-500">{category.items} services</p>
          </div>
          <span className="text-sm text-teal">Manage</span>
        </article>
      ))}
    </div>
  </section>
);
