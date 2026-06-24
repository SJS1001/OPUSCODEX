export type NavigationItem = {
  label: string;
  path: string;
  icon?: string;
};

export const mainNav: NavigationItem[] = [
  { label: 'Workspace', path: 'dashboard' },
  { label: 'Customers', path: 'customers' },
  { label: 'Properties', path: 'properties' },
  { label: 'Jobs', path: 'jobs' },
  { label: 'Dispatch', path: 'dispatch' },
  { label: 'PriceBook', path: 'pricebook' },
  { label: 'Sales Hub', path: 'sales' },
  { label: 'Billing', path: 'billing' },
  { label: 'Inventory', path: 'inventory' },
  { label: 'Reports', path: 'reports' },
  { label: 'Compliance', path: 'compliance' },
  { label: 'AI Center', path: 'ai' },
  { label: 'Settings', path: 'settings' }
];
