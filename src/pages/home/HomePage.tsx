import { useEffect, type FC } from 'react';
import GridCard from './components/grid_card/GridCard';
import { useFetch } from '~/shared/hooks/useFetch';
import styles from './HomePage.module.scss';
import heroImage from '/assets/home/hero.jpeg';
import type { Housing } from '~/shared/types/housing/Housing';

const HomePage: FC = () => {
  const { data: housings } = useFetch<Housing[]>('/data/housings.json');

  useEffect(() => {
    // console.log(housings);
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

export default HomePage;
