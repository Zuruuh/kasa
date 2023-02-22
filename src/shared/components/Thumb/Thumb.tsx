import { type FC } from 'react';
import PropTypes from 'prop-types';
import styles from './Thumb.module.scss';
import { Link } from 'react-router-dom';
import { URL } from '~/shared/types/URL';

export interface ThumbProps {
  label: string;
  image: string;
  link: URL;
}

const Thumb: FC<ThumbProps> = ({ label, image, link }) => {
  return (
    <Link to={link}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${image})`,
          '--data-title': `"${label.replace('"', '\\"')}"`,
        }}
      ></div>
    </Link>
  );
};

Thumb.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Thumb;
