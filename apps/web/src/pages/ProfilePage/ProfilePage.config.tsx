import { Suspense, lazy } from 'react';
import type { PageConfig } from '~/shared/types/PageConfig.d';

const ProfilePage = lazy(() => import('./ProfilePage'));

export const ProfilePageConfig = {
  path: '/profile',
  private: true,
  element: (
    <Suspense fallback={<p>Loading...</p>}>
      <ProfilePage />
    </Suspense>
  ),
} satisfies PageConfig;
