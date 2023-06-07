import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../storeHooks';
import { clearToken } from '~/shared/auth/slices/TokenSlice';
import { HomePageConfig } from '~/pages/HomePage';
import { clearProfileCache } from '~/shared/slices/user/ProfileApiSlice';

export function useSignOut(redirect = true): () => void {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(clearToken());
    dispatch(clearProfileCache());

    if (redirect) {
      navigate(HomePageConfig.path);
    }
  }, [navigate, dispatch, redirect]);
}
