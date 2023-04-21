import type { StoryDecorator } from '@ladle/react';
import type { FC } from 'react';

type EmptyObject = Record<PropertyKey, unknown>;

export type DecoratorProvider<TData = undefined> = TData extends undefined
  ? () => StoryDecorator
  : (data: TData) => StoryDecorator;

export type DecoratorProps<T extends EmptyObject = EmptyObject> = {
  story: FC<Partial<T>>;
  props: Partial<T>;
};
