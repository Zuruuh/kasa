import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage, { URI as HomeURI } from './pages/home/HomePage';
import AboutPage, { URI as AboutURI } from './pages/about/AboutPage';
import Layout from './components/layout/Layout';
import Error404Page from './pages/errors/404/Error404Page';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: HomeURI,
        element: <HomePage />,
      },
      {
        path: AboutURI,
        element: <AboutPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
