import { type FC } from 'react';
import Thumb from '~/shared/components/Thumb/Thumb';
import { useFetch } from '~/shared/hooks/useFetch';
import styles from './HomePage.module.scss';
import heroImage from '/assets/home/hero.jpeg';
import HousingPage from '~/pages/Housing';
import type { Housing } from '~/shared/types/housing/Housing';
import type { Page } from '~/shared/types/Page';
import ImageHeader from '~/shared/components/ImageHeader/ImageHeader';

const HomePage: FC = () => {
  const { data: housings } = useFetch<Housing[]>('/data/housings.json');

  return (
    <>
      <ImageHeader label="Chez vous, partout et ailleurs" image={heroImage} />
      <section className={styles.housingGrid}>
        {!housings ? (
          <>{/* TODO: Maybe add a loading spinner here */}</>
        ) : (
          housings.map((housing) => (
            <Thumb
              key={housing.id}
              image={housing.cover}
              label={housing.title}
              link={HousingPage.generatePath(housing)}
            />
          ))
        )}
      </section>
    </>
  );
};

const page: Page = {
  element: <HomePage />,
  path: '/',
};

export default page;
