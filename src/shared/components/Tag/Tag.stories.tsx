import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';
import { withCentered, withPadding } from '~/shared/storybook/decorators';

const meta: Meta<typeof Tag> = {
  title: 'Component/Tag',
  component: Tag,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withCentered],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'My Tag',
  },
};
