declare module 'react' {
  export type ReactNode = any;
  export type ReactElement = any;
  export type FC<P = any> = (props: P) => ReactElement | null;
  export const StrictMode: any;
  export const useEffect: any;
  const React: any;
  export default React;
}

declare module 'react-dom/client' {
  export const createRoot: any;
}

declare module 'react-dom/server' {
  export const renderToString: any;
}

declare module 'react-router-dom' {
  export const RouterProvider: any;
  export const createBrowserRouter: any;
  export const Outlet: any;
  export const NavLink: any;
  export const useParams: any;
}

declare module 'react-query' {
  export class QueryClient {
    constructor(options?: any);
  }
  export const QueryClientProvider: any;
}

declare module 'zustand' {
  export const create: any;
}

declare module 'clsx' {
  export function clsx(...inputs: any[]): string;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
