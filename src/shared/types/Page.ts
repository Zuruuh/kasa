import { RouteObject } from 'react-router';

export type Page = RouteObject & {
  path: string;
};
