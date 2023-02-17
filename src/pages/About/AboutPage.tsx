import { type FC } from 'react';
import Accordion from '~/shared/components/Accordion/Accordion';
import { type AccordionProps } from '~/shared/components/Accordion/Accordion.types';
import styles from './AboutPage.module.scss';
import { Page } from '~/shared/types/Page';
import ImageHeader from '~/shared/components/ImageHeader/ImageHeader';
import image from './assets/kalen-emsley-Bkci_8qcdvQ-unsplash 3.png';

const ACCORDION_DATA: AccordionProps[] = [
  {
    label: 'Fiabilité',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    label: 'Respect',

    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    label: 'Service',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    label: 'Responsabilité',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
];

const AboutPage: FC = () => {
  return (
    <>
      <ImageHeader image={image} />
      <div className={styles.page}>
        {ACCORDION_DATA.map(({ label, content, defaultState }) => (
          <div key={label} className={styles.accordionContainer}>
            <Accordion
              label={label}
              content={content}
              defaultState={defaultState}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const page: Page = {
  element: <AboutPage />,
  path: '/about',
};

export default page;
