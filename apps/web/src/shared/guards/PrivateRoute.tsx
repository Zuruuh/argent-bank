import { type FC, type ReactNode, useEffect, useState } from 'react';
import { useProfileQuery } from '../slices/AuthenticatedApiSlice';
import { useNavigate } from 'react-router';
import { SignInPageConfig } from '~/pages/SignInPage';

export interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const profile = useProfileQuery({}, {});
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (![profile, navigate].every(Boolean)) {
      return;
    }

    if (profile.isLoading) {
      return;
    }

    if (profile.isError) {
      navigate(SignInPageConfig.path);
    }

    setLoading(false);
  }, [profile, navigate]);

  // TODO: replace with a spinner or smth like that
  return <>{loading ? <div>Loading...</div> : children}</>;
};

