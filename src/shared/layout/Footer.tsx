import { type FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.image} alt="Kasa" src="/assets/logo.svg" />
      <span className={styles.text}>&copy; 2022 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
