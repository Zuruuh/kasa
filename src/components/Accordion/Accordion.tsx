import { FC, useId, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.scss';
import { ReactComponent as ChevronDown } from './icons/chevron-down-solid.svg';
import { ReactComponent as ChevronUp } from './icons/chevron-up-solid.svg';

export enum AccordionState {
  Opened = 'opened',
  Closed = 'closed',
}

export interface AccordionProps {
  label: string;
  content: string;
  defaultState?: AccordionState;
}

const Accordion: FC<AccordionProps> = ({
  label,
  defaultState = AccordionState.Closed,
  content,
}) => {
  const [opened, setOpened] = useState<boolean>(
    defaultState === AccordionState.Opened
  );

  // https://beta.reactjs.org/apis/react/useId#generating-unique-ids-for-accessibility-attributes
  const buttonHintId = useId();

  return (
    <div className={styles.accordion}>
      <div className={styles.topBar}>
        <span className={styles.label} id={buttonHintId}>
          {label}
        </span>
        <button
          className={styles.button}
          onClick={() => setOpened((state) => !state)}
          aria-labelledby={buttonHintId}
        >
          {opened ? (
            <ChevronUp width={32} height={32} fill={'#fff'} />
          ) : (
            <ChevronDown width={32} height={32} fill={'#fff'} />
          )}
        </button>
      </div>
      {opened ? <span className={styles.content}>{content}</span> : <></>}
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  defaultState: PropTypes.oneOf(Object.values(AccordionState)),
};

export default Accordion;
