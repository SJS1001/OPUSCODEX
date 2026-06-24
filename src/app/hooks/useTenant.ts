import { useParams } from 'react-router-dom';

export const useTenant = () => {
  const { companyId = 'atlas-hvac' } = useParams();
  return {
    companyId,
    permissions: ['customers.read', 'jobs.read'],
    theme: 'light'
  } as const;
};
