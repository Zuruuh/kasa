import { render, screen } from '@testing-library/react';
import { test, describe, expect, beforeEach } from 'vitest';
import UserEvent from '@testing-library/user-event';
import Accordion from './Accordion';
import { ACCORDION_STATES } from './Accordion.types';

describe('Accordion', async () => {
  const user = UserEvent.setup();

  describe('Accordion closed by default', async () => {
    beforeEach(async () => {
      render(
        <Accordion
          content="My Content"
          label="My Label"
          defaultState={ACCORDION_STATES.CLOSED}
        />
      );
    });

    test('The label is displayed', async () => {
      const label = screen.queryByText('My Label')!;

      expect(label).not.toBeNull();
      expect(label.textContent).toBe('My Label');
    });

    test("I can't see the text when it's closed", async () => {
      const element = screen.queryByText('My Content');

      expect(element).toBeNull();
    });

    test('I can see the text when I click on the button', async () => {
      const button = screen.queryByLabelText('My Label')!;
      expect(button).not.toBeNull();

      await user.click(button);

      const content = screen.queryByText('My Content')!;
      expect(content).not.toBeNull();
      expect(content.textContent).toBe('My Content');
    });

    test("I can't see the text when I click twice on the button", async () => {
      const button = screen.queryByLabelText('My Label')!;
      expect(button).not.toBeNull();

      await user.click(button);
      await user.click(button);

      const content = screen.queryByText('My Content')!;
      expect(content).toBeNull();
    });
  });

  describe('Accordion opened by default', async () => {
    beforeEach(async () => {
      render(
        <Accordion
          content="My Content"
          label="My Label"
          defaultState={ACCORDION_STATES.OPENED}
        />
      );
    });

    test('I can see the content without clicking the button', async () => {
      const content = screen.queryByText('My Content')!;
      expect(content).not.toBeNull();
      expect(content.textContent).toBe('My Content');
    });

    test('I cannot see the text when I click on the button', async () => {
      const button = screen.queryByLabelText('My Label')!;
      expect(button).not.toBeNull();

      await user.click(button);

      const content = screen.queryByText('My Content')!;
      expect(content).toBeNull();
    });
  });
});
