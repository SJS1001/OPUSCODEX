const bundles = [
  { name: 'Platinum Comfort', price: '$18,900', items: ['Modulating furnace', 'IAQ upgrade', '10y labor'] },
  { name: 'Gold Efficiency', price: '$14,200', items: ['Two-stage furnace', 'MERV 13', '5y labor'] }
];

export const QuoteBuilder = () => (
  <section className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold text-navy">Sales Hub · Quote Builder</h2>
      <p className="text-sm text-slate-500">Configure bundles, options, and financing.</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {bundles.map((bundle) => (
        <article key={bundle.name} className="rounded-3xl bg-white/80 p-4 shadow-soft-lg">
          <h3 className="text-xl font-semibold text-navy">{bundle.name}</h3>
          <p className="text-sm text-slate-500">{bundle.items.join(' · ')}</p>
          <p className="text-2xl font-semibold text-teal">{bundle.price}</p>
        </article>
      ))}
    </div>
  </section>
);
