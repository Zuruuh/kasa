import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './NavBar';
import styles from './Layout.module.scss';
import PropTypes from 'prop-types';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.page}>{children ? children : <Outlet />}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
