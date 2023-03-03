import { useState, type FC, useMemo, useCallback } from 'react';
import type { AutoScrollableOptions } from '~/shared/types/AutoScrollableOptions';
import type { URL } from '~/shared/types/URL';
import styles from './Carousel.module.scss';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as LeftArrowIcon } from './assets/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from './assets/right-arrow.svg';
import PropTypes, { type Validator } from 'prop-types';
import { useTimeout } from '~/shared/hooks/useTimeout';

export type CarouselProps = {
  images: URL[];
  showIndex?: boolean;
  scrollOptions: AutoScrollableOptions;
};

const Carousel: FC<CarouselProps> = ({
  images,
  showIndex = true,
  scrollOptions = { enabled: true, timeoutInMs: 5000 },
}) => {
  const [index, setIndex] = useState<number>(0);
  const framedImages = useMemo(
    () => [
      images.at(index - 1),
      images.at(index),
      images.at(-(images.length - index - 1)),
    ],
    [images, index]
  );

  const next = useCallback(() => {
    setIndex((i) => (i + 1 > images.length - 1 ? 0 : i + 1));
  }, [images]);

  const previous = useCallback(() => {
    setIndex((i) => (i - 1 < 0 ? images.length - 1 : i - 1));
  }, [images]);

  useTimeout(next, scrollOptions.enabled ? scrollOptions.timeoutInMs : false);

  return (
    <div className={styles.carousel}>
      <div className={styles.images}>
        {framedImages.map((image, i) => (
          <img
            className={styles.image}
            alt={`Illustration de la location (${i + 1}/${images.length})`}
            aria-hidden={index === i}
            src={image}
            style={{
              '--data-offset': `${100 * i}%`,
            }}
            key={`${image}-${i}`}
          />
        ))}
        <div className={styles.controlsContainer}>
          <div className={`${styles.leftButton} ${styles.controlsButton}`}>
            <IconButton onClick={previous} icon={<LeftArrowIcon />} />
          </div>
          <div className={`${styles.rightButton} ${styles.controlsButton}`}>
            <IconButton onClick={next} icon={<RightArrowIcon />} />
          </div>
          {showIndex ? (
            <span className={styles.indexContainer}>
              {index + 1}/{images.length}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string as Validator<URL>).isRequired,
  showIndex: PropTypes.bool,
};

export default Carousel;
