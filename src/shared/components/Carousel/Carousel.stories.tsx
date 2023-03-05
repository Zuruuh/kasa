import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { withPadding } from '~/shared/storybook/decorators';

const meta: Meta<typeof Carousel> = {
  title: 'Component/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding],
};

const IMAGES_FIXTURES = [
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
];

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: IMAGES_FIXTURES,
    showIndex: false,
    scrollOptions: { enabled: false },
  },
};

export const WithIndexShown: Story = {
  args: {
    images: IMAGES_FIXTURES,
    showIndex: true,
    scrollOptions: { enabled: false },
  },
};

export const WithAutoScroll: Story = {
  args: {
    images: IMAGES_FIXTURES,
    showIndex: true,
    scrollOptions: { enabled: true, timeoutInMs: 2500 },
  },
};
