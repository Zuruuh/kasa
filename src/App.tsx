import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage, { URI as HomeURI } from './pages/Home';
import AboutPage, { URI as AboutURI } from './pages/About';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: HomeURI,
    element: <Layout />,
    children: [
      {
        path: '',
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
