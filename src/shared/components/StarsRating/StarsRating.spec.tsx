import { describe, expect, test } from 'vitest';
import StarsRating, { StarsRatingRange } from './StarsRating';
import { cleanup, render, screen } from '@testing-library/react';

describe('StarsRating', async () => {
  test('The correct amount of stars is displayed', async () => {
    const range = Array.from(Array(5).keys()) as StarsRatingRange[];

    range.forEach((amount) => {
      render(<StarsRating count={amount} />);

      const stars = screen.queryAllByRole('img');
      expect(stars.length).toBe(5);

      stars.forEach((star, i) => {
        if (i >= amount) {
          expect(star.classList.contains('empty')).toBeTruthy();
        } else {
          expect(star.classList.contains('filled')).toBeTruthy();
        }
      });

      cleanup();
    });
  });
});
