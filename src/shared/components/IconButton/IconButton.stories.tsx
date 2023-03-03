import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { ReactComponent as LeftArrowIcon } from './fixtures/arrow-left-solid.svg';
import { ICON_BUTTON_SIZE } from './IconButton.types';

const meta: Meta<typeof IconButton> = {
  title: 'Component/IconButton',
  component: IconButton,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const onClick = () => {
  /**/
};

export const Large: Story = {
  args: {
    icon: <LeftArrowIcon />,
    onClick,
    size: ICON_BUTTON_SIZE.LARGE,
  },
};

export const Medium: Story = {
  args: {
    icon: <LeftArrowIcon />,
    onClick,
    disabled: true,
    size: ICON_BUTTON_SIZE.MEDIUM,
  },
};

export const Small: Story = {
  args: {
    icon: <LeftArrowIcon />,
    onClick,
    disabled: true,
    size: ICON_BUTTON_SIZE.SMALL,
  },
};

export const Disabled: Story = {
  args: {
    icon: <LeftArrowIcon />,
    onClick,
    disabled: true,
  },
};
