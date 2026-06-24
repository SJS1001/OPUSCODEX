import { SearchInput } from '@components/forms/SearchInput.tsx';
import { Button } from '@components/ui/Button.tsx';

const customers = [
  { name: 'Jessica Hill', properties: 2, jobs: 12 },
  { name: 'Northwind Lofts', properties: 5, jobs: 7 },
  { name: 'Casa Verde HOA', properties: 18, jobs: 31 }
];

export const CustomerList = () => (
  <section className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-navy">Customer 360</h2>
        <p className="text-sm text-slate-500">Search customers, properties, and recent activity.</p>
      </div>
      <Button>Create customer</Button>
    </div>
    <SearchInput placeholder="Search name, property, tag" />
    <div className="space-y-3">
      {customers.map((customer) => (
        <article key={customer.name} className="flex items-center justify-between rounded-3xl bg-white/80 p-4 shadow-soft-lg">
          <div>
            <p className="text-lg font-medium text-navy">{customer.name}</p>
            <p className="text-sm text-slate-500">
              {customer.properties} properties · {customer.jobs} lifetime jobs
            </p>
          </div>
          <Button variant="secondary">Open</Button>
        </article>
      ))}
    </div>
  </section>
);
