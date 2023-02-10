import { Link } from 'react-router-dom';
import { URI as HomeURI } from '~/pages/home/HomePage';
import styles from './Error404Page.module.scss';

const Error404Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>404</span>
      <span className={styles.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to={HomeURI} className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error404Page;
