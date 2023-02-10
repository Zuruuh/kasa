import { type FC } from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './NavBar';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
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
