import { useState, type FC } from 'react';
import type { AutoScrollableOptions } from '~/shared/types/AutoScrollableOptions';
import type { URL } from '~/shared/types/URL';
import styles from './Carousel.module.scss';

export type CarouselProps = {
  images: URL[];
  showIndex?: boolean;
  scrollOptions: AutoScrollableOptions;
};

const Carousel: FC<CarouselProps> = ({
  images,
  //   showIndex = true,
  //   scrollOptions = { enabled: true, timeoutInMs: 5000 },
}) => {
  const [index, setIndex] = useState<number>(0);
  const framedImages = [
    images.at(index - 1),
    images.at(index),
    images.at(-(images.length - index - 1)),
  ];
  console.log(framedImages);

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
              '--data-offset': 400 * i,
              accentColor: '-moz-initial',
            }}
            key={image}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
