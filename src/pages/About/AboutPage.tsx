import { type FC } from 'react';
import Accordion from '~/shared/components/Accordion/Accordion';
import {
  ACCORDION_SIZES,
  type AccordionProps,
} from '~/shared/components/Accordion/Accordion.types';
import styles from './AboutPage.module.scss';
import { Page } from '~/shared/types/Page';
import ImageHeader from '~/shared/components/ImageHeader/ImageHeader';
import image from './assets/kalen-emsley-Bkci_8qcdvQ-unsplash 3.png';

const ACCORDION_DATA: (AccordionProps & { content: string })[] = [
  {
    label: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
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
    <div className={styles.container}>
      <ImageHeader image={image} />
      <div className={styles.page}>
        {ACCORDION_DATA.map(({ label, content, defaultState }) => (
          <div key={label} className={styles.accordionContainer}>
            <Accordion
              size={ACCORDION_SIZES.LARGE}
              label={label}
              content={content}
              defaultState={defaultState}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const page: Page = {
  element: <AboutPage />,
  path: '/about',
};

export default page;
