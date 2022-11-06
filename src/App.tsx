import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import HomePage, { URI as HomeURI } from './pages/Home';
import AboutPage, { URI as AboutURI } from './pages/About';

const router = createBrowserRouter([
  {
    path: HomeURI,
    element: <NavBar />,
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
