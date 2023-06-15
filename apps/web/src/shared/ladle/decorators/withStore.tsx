import { Provider } from 'react-redux';
import type { Decorator } from './Decorator.types';
import { Store } from '@reduxjs/toolkit';
import { createProvider } from './createProvider';

type DecoratorProps = { store: Store };

const withStore: Decorator<DecoratorProps> = (
  element,
  { store }: DecoratorProps
) => <Provider store={store}>{element}</Provider>;

export const withStoreProvider = createProvider(withStore);
