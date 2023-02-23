import { Link } from 'react-router-dom';
import HomePage from '~/pages/Home/HomePage';
import styles from './Error404Page.module.scss';
import { type FC } from 'react';
import type { Page } from '~/shared/types/Page';

const Error404Page: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>404</span>
      <span className={styles.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to={HomePage.path} className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

const page: Page = {
  element: <Error404Page />,
  path: '*',
};

export default page;
