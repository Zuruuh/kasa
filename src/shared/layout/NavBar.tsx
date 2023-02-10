import { type FC, memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { URI as HomeURI } from '~/pages/home/HomePage';
import { URI as AboutURI } from '~/pages/about/AboutPage';
import styles from './NavBar.module.scss';

interface NavLinkData {
  label: string;
  link: string;
}

const NAV_LINKS_DATA: NavLinkData[] = [
  { label: 'Accueil', link: HomeURI },
  { label: 'A Propos', link: AboutURI },
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
      <Link to="/">
        <img alt="Kasa" src="/assets/logo.svg" />
      </Link>
      <ul className={styles.links}>{links}</ul>
    </nav>
  );
};

export default memo(Navbar);
