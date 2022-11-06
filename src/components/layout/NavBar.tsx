import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NAV_LINKS_DATA = [
  { label: 'Accueil', link: '/' },
  { label: 'A Propos', link: '/about' },
];

const Navbar: React.FC = () => {
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

export default Navbar;
