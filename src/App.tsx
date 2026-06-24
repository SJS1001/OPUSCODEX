import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router/routes.tsx';
import { AppProviders } from '@app/providers/AppProviders.tsx';

const App = () => (
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
);

export default App;
