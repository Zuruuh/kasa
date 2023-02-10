import { type FC } from 'react';
import PropTypes from 'prop-types';
import styles from './GridCard.module.scss';

export interface GridCardProps {
  label: string;
  image: string;
}

const GridCard: FC<GridCardProps> = ({ label, image }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${image})`,
        '--card-title': `"${label.replace('"', '\\"')}"`,
      }}
    ></div>
  );
};

GridCard.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GridCard;
