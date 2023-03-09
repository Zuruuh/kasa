import type { Meta, StoryObj } from '@storybook/react';
import ImageHeader from './ImageHeader';
import { withPadding } from '~/shared/storybook/decorators';

const meta: Meta<typeof ImageHeader> = {
  title: 'Component/ImageHeader',
  component: ImageHeader,
  decorators: [withPadding],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ImageHeader>;

export const Default: Story = {
  args: {
    image:
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
    label: 'My Image Header',
  },
};
