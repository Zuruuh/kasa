import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import Tag from './Tag';

describe('Tag', async () => {
  beforeEach(async () => {
    render(<Tag label="My Label" />);
  });

  test('The tag is correctly displayed', async () => {
    const tag = screen.queryByText('My Label');

    expect(tag).not.toBeNull();
  });
});
