import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Thumb from './Thumb';
import { BrowserRouter } from 'react-router-dom';

describe('Thumb', async () => {
  const image =
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg';
  describe('Renders correctly', async () => {
    beforeEach(async () => {
      render(<Thumb label="My Label" link="/test" image={image} />, {
        wrapper: BrowserRouter,
      });
    });

    test('The card is displayed correctly', async () => {
      const element = screen.queryByText(
        (_, element) =>
          (element as HTMLElement).style.getPropertyValue('--card-title') ===
          '"My Label"'
      )!;

      expect(element).not.toBeNull();
      expect(element.style.backgroundImage).toBe(`url(${image})`);
      expect((element.parentElement as HTMLAnchorElement).href).toBe(
        'http://localhost:3000/test'
      );
    });
  });
});
