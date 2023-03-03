import type { Meta, StoryObj } from '@storybook/react';
import StarsRating from './StarsRating';

const meta: Meta<typeof StarsRating> = {
  title: 'Component/StarsRating',
  component: StarsRating,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof StarsRating>;

export const ZeroStars: Story = {
  args: {
    count: 0,
  },
};

export const OneStar: Story = {
  args: {
    count: 1,
  },
};

export const TwoStars: Story = {
  args: {
    count: 2,
  },
};

export const ThreeStars: Story = {
  args: {
    count: 3,
  },
};

export const FourStars: Story = {
  args: {
    count: 4,
  },
};

export const FiveStars: Story = {
  args: {
    count: 5,
  },
};
