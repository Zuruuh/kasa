import { useEffect } from 'react';
import GridCard from '../components/GridCard';
import { useFetch } from '../hooks/useFetch';
import type { Housing } from '../types/housing/Housing';
import styles from './Home.module.scss';
import heroImage from '/assets/home/hero.jpeg';

const Home: React.FC = () => {
  const { data: housings } = useFetch<Housing[]>('/data/housings.json');
  useEffect(() => {
    console.log(housings);
  }, [housings]);

  return (
    <>
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
      <section className={styles.housingGrid}>
        {!housings ? (
          <>{/* TODO: Maybe add a loading spinner here */}</>
        ) : (
          housings.map(({ cover, title, id }) => (
            <GridCard key={id} image={cover} label={title} />
          ))
        )}
      </section>
    </>
  );
};

export const URI = '/';

export default Home;
