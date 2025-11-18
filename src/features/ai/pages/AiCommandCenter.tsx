import { Button } from '@components/ui/Button.tsx';

const insights = [
  { title: 'Lead enrichment', detail: '4 new prospects missing zone data' },
  { title: 'Workflow suggestion', detail: 'Auto-create post-job surveys for tune-ups' },
  { title: 'PriceBook optimization', detail: 'Increase IAQ upsell by 6% to match margin goals' }
];

export const AiCommandCenter = () => (
  <section className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-navy">AI Command Center</h2>
        <p className="text-sm text-slate-500">Unified intelligence across customers, jobs, and proposals.</p>
      </div>
      <Button variant="secondary">Open automations</Button>
    </div>
    <div className="space-y-3">
      {insights.map((insight) => (
        <article key={insight.title} className="rounded-3xl bg-gradient-to-r from-navy to-slate-900 p-4 text-white shadow-soft-lg">
          <p className="text-sm uppercase text-teal">{insight.title}</p>
          <p className="text-lg font-semibold">{insight.detail}</p>
        </article>
      ))}
    </div>
  </section>
);
