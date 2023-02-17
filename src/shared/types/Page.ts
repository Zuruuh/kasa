import { RouteObject } from 'react-router';

export type Page = RouteObject & {
  path: string;
};

export interface HasUriGenerator<T> {
  generatePath: (args: T) => string;
}
