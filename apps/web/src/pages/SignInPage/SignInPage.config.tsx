import { Suspense, lazy } from 'react';
import type { PageConfig } from '~/shared/types/PageConfig.d';

const SignInPage = lazy(() => import('./SignInPage'));

export const SignInPageConfig = {
  path: '/sign-in',
  element: (
    <Suspense fallback={<p>Loading...</p>}>
      <SignInPage />
    </Suspense>
  ),
} satisfies PageConfig;
