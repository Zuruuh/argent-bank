import type { RouteObject } from 'react-router';

export type PageConfig<T = undefined> = RouteObject & {
  path: string;
  private?: boolean;
  pathGenerator?(object?: T): string;
};
