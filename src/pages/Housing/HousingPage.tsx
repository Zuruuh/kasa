import { type FC } from 'react';
import type { Page } from '~/shared/types/Page';

const HousingPage: FC = () => {
  return (
    <>
      <></>
    </>
  );
};

const page: Page = {
  element: <HousingPage />,
  path: '/housing/:housing',
};

export default page;
