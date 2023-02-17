import { type FC } from 'react';
import styles from './StarsRating.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from './assets/Star.svg';
import type { IntRange } from '@tjmora/ts-range-types';

const countRange = Array.from(Array(5).keys()) as IntRange<0, 5>[];

export type StarsRatingRange = typeof countRange[number];

export interface StarsRatingProps {
  count: StarsRatingRange;
}

const StarsRating: FC<StarsRatingProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) =>
        i >= count ? (
          <Star key={`${count}-${i}`} className={styles.starEmpty} />
        ) : (
          <Star key={`${count}-${i}`} className={styles.starFilled} />
        )
      )}
    </>
  );
};

StarsRating.propTypes = {
  count: PropTypes.oneOf(countRange).isRequired,
};

export default StarsRating;
