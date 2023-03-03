import { useMemo, type FC } from 'react';
import styles from './IconButton.module.scss';
import PropTypes from 'prop-types';
import {
  ICON_BUTTON_SIZE,
  type IconButtonSize,
  type IconButtonProps,
} from './IconButton.types';

const IconButton: FC<IconButtonProps> = ({
  icon,
  disabled = false,
  onClick,
  size = ICON_BUTTON_SIZE.LARGE,
}) => {
  const buttonSizeClassName = useMemo<string>((): string => {
    return {
      [ICON_BUTTON_SIZE.SMALL]: styles.small,
      [ICON_BUTTON_SIZE.MEDIUM]: styles.medium,
      [ICON_BUTTON_SIZE.LARGE]: styles.large,
    }[size];
  }, [size]);

  return (
    <button
      className={`${styles.button} ${buttonSizeClassName} ${
        disabled ? styles.disabled : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(ICON_BUTTON_SIZE) as IconButtonSize[]),
};

export default IconButton;
