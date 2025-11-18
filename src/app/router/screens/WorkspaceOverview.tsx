import { KpiCard } from '@components/data/KpiCard.tsx';
import { workspaceKpis, activityFeed } from '@app/services/mockData.ts';
import { CustomerList } from '@features/customers/pages/CustomerList.tsx';
import { JobBoard } from '@features/jobs/pages/JobBoard.tsx';

export const WorkspaceOverview = () => (
  <div className="space-y-8">
    <section className="grid gap-4 md:grid-cols-3">
      {workspaceKpis.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </section>
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-navy">Field Activity</h2>
        <div className="space-y-3">
          {activityFeed.map((item) => (
            <article key={item.id} className="rounded-3xl bg-white/80 p-4 shadow-soft-lg">
              <p className="text-sm font-semibold text-navy">{item.title}</p>
              <p className="text-sm text-slate-500">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <CustomerList />
      </div>
    </section>
    <JobBoard />
  </div>
);
