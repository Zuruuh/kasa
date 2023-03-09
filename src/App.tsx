import { type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './shared/layout/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Housing from './pages/Housing';
import Error404Page from './pages/Errors/404/Error404Page';
import type { Page } from './shared/types/Page';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [HomePage, AboutPage, Housing, Error404Page] as Page[],
    // children: Object.values(
    //   import.meta.glob('./pages/**/*.tsx', { eager: true }) as Record<
    //     string,
    //     Page
    //   >
    // ),
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
