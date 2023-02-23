import { type FC } from 'react';
import styles from './StarsRating.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from './assets/Star.svg';
import type { IntRange } from '@tjmora/ts-range-types';

const countRange = Array.from(Array(6).keys()) as IntRange<0, 5>[];

export type StarsRatingRange = (typeof countRange)[number];

export interface StarsRatingProps {
  count: StarsRatingRange;
}

const StarsRating: FC<StarsRatingProps> = ({ count }) => {
  return (
    <div aria-label={`Note: ${count}/5`}>
      {Array.from({ length: 5 }).map((_, i) =>
        i >= count ? (
          <Star
            key={`${count}-${i}`}
            className={`${styles.starEmpty} empty`}
            role="img"
          />
        ) : (
          <Star
            key={`${count}-${i}`}
            className={`${styles.starFilled} filled`}
            role="img"
          />
        )
      )}
    </div>
  );
};

StarsRating.propTypes = {
  count: PropTypes.oneOf(countRange).isRequired,
};

export default StarsRating;
