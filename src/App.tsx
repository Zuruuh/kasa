import { type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage, { URI as HomeURI } from './pages/home/HomePage';
import AboutPage, { URI as AboutURI } from './pages/about/AboutPage';
import Layout from './shared/layout/Layout';
import Error404Page from './pages/errors/404/Error404Page';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: HomeURI,
        element: <HomePage />,
        index: true,
      },
      {
        path: AboutURI,
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
