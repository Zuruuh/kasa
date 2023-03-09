import { type FC } from 'react';
import { useLoaderData } from 'react-router';
import StarsRating, { StarsRatingRange } from '~/shared/components/StarsRating';
import Tag from '~/shared/components/Tag';
import type { Page, HasUriGenerator } from '~/shared/types/Page';
import { Housing } from '~/shared/types/housing/Housing';
import Error404Page from '~/pages/Errors/404/Error404Page';
import Carousel from '~/shared/components/Carousel/Carousel';
import Accordion, {
  ACCORDION_SIZES,
  ACCORDION_STATES,
} from '~/shared/components/Accordion';
import styles from './HousingPage.module.scss';

const HousingPage: FC = () => {
  const housing = useLoaderData() as Housing;

  return (
    <section>
      <div>
        <Carousel
          images={housing.pictures}
          showIndex={true}
          scrollOptions={{ enabled: true, timeoutInMs: 5000 }}
        />
      </div>
      <header className={styles.header}>
        <div className={styles.headerFirstRow}>
          <div className={styles.titleBlock}>
            <h3 className={styles.title}>{housing.title}</h3>
            <span className={styles.location}>{housing.location}</span>
          </div>
          <div className={styles.tags}>
            {housing.tags.map((tag) => (
              <Tag label={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className={styles.headerSecondRow}>
          <div className={styles.host}>
            <span className={styles.hostName}>{housing.host.name}</span>
            <img
              className={styles.hostPicture}
              src={housing.host.picture}
              alt={housing.host.name}
            />
          </div>
          <div className={styles.rating}>
            <StarsRating count={Number(housing.rating) as StarsRatingRange} />
          </div>
        </div>
      </header>
      <section className={styles.informations}>
        <Accordion
          label="Description"
          defaultState={ACCORDION_STATES.OPENED}
          size={ACCORDION_SIZES.SMALL}
          content={housing.description}
        />
        <Accordion
          label="Equipements"
          size={ACCORDION_SIZES.SMALL}
          defaultState={ACCORDION_STATES.OPENED}
        >
          <ul>
            {housing.equipments.map((equipment) => (
              <li className={styles.equipment} key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>
        </Accordion>
      </section>
    </section>
  );
};

const page: Page & HasUriGenerator<Housing> = {
  element: <HousingPage />,
  path: '/housing/:housing',
  errorElement: Error404Page.element,
  generatePath: (housing: Housing) => `/housing/${housing.id}`,
  async loader({ params }) {
    const { housing: housingId } = params;
    if (!housingId) {
      throw new Error('404');
    }

    const housings = (await (
      await fetch('/data/housings.json')
    ).json()) as Housing[];

    const housing = housings.find((housing) => housing.id === housingId);
    if (!housing) {
      throw new Error('404');
    }

    return housing;
  },
};

export default page;
