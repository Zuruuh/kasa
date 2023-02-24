import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import { ACCORDION_STATES } from './Accordion.types';

const meta: Meta<typeof Accordion> = {
  title: 'Component/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
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
