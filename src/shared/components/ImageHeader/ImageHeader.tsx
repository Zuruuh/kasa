import { type FC } from 'react';
import styles from './ImageHeader.module.scss';
import PropTypes from 'prop-types';
import type { ImageHeaderProps } from './ImageHeader.types';

// TODO: Use the size param
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ImageHeader: FC<ImageHeaderProps> = ({ label, image, size }) => {
  return (
    <section>
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src={image}
          alt={label ?? 'Heading'}
        />
        {label ? <h2 className={styles.heroHeading}>{label}</h2> : <></>}
      </div>
    </section>
  );
};

ImageHeader.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default ImageHeader;
