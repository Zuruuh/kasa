import { type FC } from 'react';
import styles from './Tag.module.scss';
import PropTypes from 'prop-types';

export interface TagProps {
  label: string;
}

const Tag: FC<TagProps> = ({ label }) => {
  return (
    <div className={styles.tag}>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
