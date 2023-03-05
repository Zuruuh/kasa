import { type FC, useId, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChevronDown } from './assets/chevron-down-solid.svg';
import { ReactComponent as ChevronUp } from './assets/chevron-up-solid.svg';
import {
  ACCORDION_STATES,
  ACCORDION_SIZES,
  type AccordionState,
  type AccordionProps,
  type SizeClassNameWrapper,
} from './Accordion.types';
import styles from './Accordion.module.scss';

const Accordion: FC<AccordionProps> = (props) => {
  const {
    label,
    defaultState = ACCORDION_STATES.CLOSED,
    size = ACCORDION_SIZES.LARGE,
  } = props;

  const sizeClassNames =
    useMemo<SizeClassNameWrapper>((): SizeClassNameWrapper => {
      return {
        [ACCORDION_SIZES.SMALL]: {
          text: styles.textSmall,
          label: styles.labelSmall,
        },
        [ACCORDION_SIZES.LARGE]: {
          text: styles.textLarge,
          label: styles.labelLarge,
        },
      }[size];
    }, [size]);

  const [opened, setOpened] = useState<boolean>(
    defaultState === ACCORDION_STATES.OPENED
  );

  // https://beta.reactjs.org/apis/react/useId#generating-unique-ids-for-accessibility-attributes
  const buttonHintId = useId();

  return (
    <div className={styles.accordion}>
      <div className={styles.topBar}>
        <span
          className={`${styles.label} ${sizeClassNames.label}`}
          id={buttonHintId}
        >
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
          {'children' in props ? (
            <div className={`${styles.content} ${sizeClassNames.text}`}>
              {props.children}
            </div>
          ) : (
            <span className={`${styles.content} ${sizeClassNames.text}`}>
              {props.content}
            </span>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ACCORDION_SIZES)),
  defaultState: PropTypes.oneOf(
    Object.values(ACCORDION_STATES) as AccordionState[]
  ),
};

export default Accordion;
