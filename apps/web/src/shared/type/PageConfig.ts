import type { RouteObject } from 'react-router';

export type PageConfig<T = undefined> = RouteObject & {
  path: string;
  pathGenerator(object?: T): string;
};
