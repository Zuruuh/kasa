import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import type { Housing } from '../types/housing/Housing';
import styles from './Home.module.scss';
import heroImage from '/assets/home/hero.jpeg';

const Home: React.FC = () => {
  const housings = useFetch<Housing[]>('/data/housings.json');
  useEffect(() => {
    console.log(housings);
  }, [housings]);

  return (
    <section>
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="Chez vous, partout et ailleurs"
        />
        <h2 className={styles.heroHeading}>Chez vous, partout et ailleurs</h2>
      </div>
    </section>
  );
};

export const URI = '/';

export default Home;
