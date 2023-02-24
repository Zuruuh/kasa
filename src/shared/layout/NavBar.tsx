import { type FC, memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomePage from '~/pages/Home/HomePage';
import AboutPage from '~/pages/About/AboutPage';
import styles from './NavBar.module.scss';

interface NavLinkData {
  label: string;
  link: string;
}

const NAV_LINKS_DATA: NavLinkData[] = [
  { label: 'Accueil', link: HomePage.path },
  { label: 'A Propos', link: AboutPage.path },
];

const Navbar: FC = () => {
  const links = NAV_LINKS_DATA.map(({ link, label }) => (
    <li key={link}>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.linkActive : ''}`
        }
        to={link}
      >
        {label}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <Link to={HomePage.path}>
        <img alt="Kasa" src="/assets/logo.svg" className={styles.logo} />
      </Link>
      <ul className={styles.links}>{links}</ul>
    </nav>
  );
};

export default memo(Navbar);
