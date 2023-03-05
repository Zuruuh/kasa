import type { Meta, StoryObj } from '@storybook/react';
import Thumb from './Thumb';
import { withRouter } from '~/shared/storybook/decorators';

const meta: Meta<typeof Thumb> = {
  title: 'Component/Thumb',
  component: Thumb,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Thumb>;

export const Default: Story = {
  args: {
    image:
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
    label: 'My Thumbnail',
    link: '/',
  },
};
