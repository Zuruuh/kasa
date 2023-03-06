import { type FC } from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '~/shared/assets/logo.svg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo role="img" aria-label="Kasa" className={styles.image} />
      <span className={styles.text}>&copy; 2022 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
