import { type MouseEventHandler, type ReactNode } from 'react';

const ICON_BUTTON_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

Object.freeze(ICON_BUTTON_SIZE);

export { ICON_BUTTON_SIZE };

export type IconButtonSize =
  (typeof ICON_BUTTON_SIZE)[keyof typeof ICON_BUTTON_SIZE];

export interface IconButtonProps {
  icon: ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler;
  size?: IconButtonSize;
}
