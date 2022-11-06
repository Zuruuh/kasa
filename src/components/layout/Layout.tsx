import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './NavBar';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
