import { screen, render } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import ImageHeader from './ImageHeader';

const image =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg';

describe('ImageHeader', async () => {
  describe('With an image header with an image and a label', async () => {
    beforeEach(async () => {
      render(<ImageHeader image={image} label="My Label" />);
    });

    test('There is a heading message', async () => {
      const label = screen.queryByText('My Label')!;
      expect(label).not.toBeNull();
    });

    test('The image has an alt', async () => {
      const imageElement = screen.queryByRole<HTMLImageElement>('img')!;

      expect(imageElement).not.toBeNull();
      expect(imageElement.alt).toBe('My Label');
    });
  });

  describe('With an image header with an image but without a label', async () => {
    beforeEach(async () => {
      render(<ImageHeader image={image} />);
    });

    test('There is no label', async () => {
      const label = screen.queryByText('My Label');
      expect(label).toBeNull();
    });

    test('There is a fallback alt message for the image', async () => {
      const imageElement = screen.queryByRole<HTMLImageElement>('img')!;

      expect(imageElement).not.toBeNull();
      expect(imageElement.alt).toBe('Heading');
    });
  });
});
