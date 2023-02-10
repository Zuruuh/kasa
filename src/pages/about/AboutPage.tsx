import { type FC } from 'react';
import Accordion from '~/shared/components/Accordion/Accordion';
import { type AccordionProps } from '~/shared/components/Accordion/Accordion.types';
import styles from './AboutPage.module.scss';

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
  );
};

export default AboutPage;

export const URI = '/about';
