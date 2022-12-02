import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import type { AccordionProps } from '../../components/Accordion/Accordion';
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

const AboutPage: React.FC = () => {
  return (
    <div>
      {ACCORDION_DATA.map(({ label, content }) => (
        <div key={label} className={styles.accordionContainer}>
          <Accordion label={label} content={content} />
        </div>
      ))}
    </div>
  );
};

export default AboutPage;

export const URI = '/about';
