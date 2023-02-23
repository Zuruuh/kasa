import { type FC } from 'react';
import { useLoaderData } from 'react-router';
import StarsRating, { StarsRatingRange } from '~/shared/components/StarsRating';
import Tag from '~/shared/components/Tag/Tag';
import type { Page, HasUriGenerator } from '~/shared/types/Page';
import { Housing } from '~/shared/types/housing/Housing';
import Error404Page from '~/pages/Errors/404/Error404Page';
import Carousel from '~/shared/components/Carousel/Carousel';

const HousingPage: FC = () => {
  const housing = useLoaderData() as Housing;

  return (
    <section>
      {housing.tags.map((tag) => (
        <Tag label={tag} key={tag} />
      ))}
      <StarsRating count={Number(housing.rating) as StarsRatingRange} />
      <div>
        <Carousel
          images={housing.pictures}
          showIndex={true}
          scrollOptions={{ enabled: true, timeoutInMs: 5000 }}
        />
      </div>
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
