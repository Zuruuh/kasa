import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { ACCORDION_SIZES, ACCORDION_STATES } from './Accordion.types';
import { withPadding } from '~/shared/storybook/decorators';

const meta: Meta<typeof Accordion> = {
  title: 'Component/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Closed: Story = {
  args: {
    defaultState: ACCORDION_STATES.CLOSED,
    content: 'My Hidden Content',
    label: 'My Accordion',
  },
};

export const Open: Story = {
  args: {
    defaultState: ACCORDION_STATES.OPENED,
    content: 'My content',
    label: 'My Accordion',
  },
};

export const WithReactChildren: Story = {
  args: {
    defaultState: ACCORDION_STATES.OPENED,
    children: (
      <ul style={{ listStyleType: 'none' }}>
        <li>Line 1</li>
        <li>Line 2</li>
        <li>Line 3</li>
        <li>Line 4</li>
      </ul>
    ),
    label: 'My Accordion',
  },
};

export const Small: Story = {
  args: {
    label: 'My Accordion',
    content: 'My Content',
    defaultState: ACCORDION_STATES.OPENED,
    size: ACCORDION_SIZES.SMALL,
  },
};
