import { selectCurrentToken } from '../auth/slices/TokenSlice';
import { useAppSelector } from '../hooks/storeHooks';

export function preventQueryWithoutTokenDecorator<
  THook extends (...args: Parameters<THook>) => ReturnType<THook>
>(hook: THook): THook {
  const useDecoratedHook = (...args: Parameters<THook>): ReturnType<THook> => {
    const token = Boolean(useAppSelector(selectCurrentToken));
    if (token) {
      /**/
    }

    return hook(...args);
  };

  return useDecoratedHook;
}
