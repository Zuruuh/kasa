import { type FC, useId, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChevronDown } from '~/icons/chevron-down-solid.svg';
import { ReactComponent as ChevronUp } from '~/icons/chevron-up-solid.svg';
import {
  ACCORDION_STATES,
  type AccordionState,
  type AccordionProps,
} from './Accordion.types';
import styles from './Accordion.module.scss';

const Accordion: FC<AccordionProps> = ({
  label,
  defaultState = ACCORDION_STATES.CLOSED,
  content,
}) => {
  const [opened, setOpened] = useState<boolean>(
    defaultState === ACCORDION_STATES.OPENED
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
      {opened ? (
        <div className={styles.contentContainer}>
          <span className={styles.content}>{content}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  defaultState: PropTypes.oneOf(
    Object.values(ACCORDION_STATES) as AccordionState[]
  ),
};

export default Accordion;
