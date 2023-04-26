import { Suspense, lazy } from 'react';
import type { PageConfig } from '~/shared/types/PageConfig.d';

const HomePage = lazy(() => import('./HomePage'));

export const HomePageConfig = {
  index: true,
  path: '/',
  element: (
    <Suspense fallback={<p>Loading...</p>}>
      <HomePage />
    </Suspense>
  ),
} satisfies PageConfig;
