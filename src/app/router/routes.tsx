import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@app/layouts/AppLayout.tsx';
import { CustomerList } from '@features/customers/pages/CustomerList.tsx';
import { JobBoard } from '@features/jobs/pages/JobBoard.tsx';
import { DispatchConsole } from '@features/dispatch/pages/DispatchConsole.tsx';
import { PricebookOverview } from '@features/pricebook/pages/PricebookOverview.tsx';
import { QuoteBuilder } from '@features/sales/pages/QuoteBuilder.tsx';
import { AiCommandCenter } from '@features/ai/pages/AiCommandCenter.tsx';
import { Login } from '@features/auth/pages/Login.tsx';
import { WorkspaceOverview } from '@app/router/screens/WorkspaceOverview.tsx';

export const router = createBrowserRouter([
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/:companyId',
    element: <AppLayout />, 
    children: [
      { path: 'dashboard', element: <WorkspaceOverview /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'jobs', element: <JobBoard /> },
      { path: 'dispatch', element: <DispatchConsole /> },
      { path: 'pricebook', element: <PricebookOverview /> },
      { path: 'sales', element: <QuoteBuilder /> },
      { path: 'ai', element: <AiCommandCenter /> },
      { path: '*', element: <WorkspaceOverview /> }
    ]
  },
  { path: '*', element: <Login /> }
]);
