import { BrowserRouter } from 'react-router-dom';
import type { Meta } from '@storybook/react';

type DecoratorFn = Meta['decorators'];

export const withRouter: DecoratorFn = (
  component: Parameters<DecoratorFn>[0]
): ReturnType<DecoratorFn> => <BrowserRouter>{component()}</BrowserRouter>;
