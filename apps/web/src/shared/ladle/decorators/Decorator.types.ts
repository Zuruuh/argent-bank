import { FC, ReactElement, ReactNode } from 'react';

export type StoryDecorator = (
  element: FC<Partial<Record<PropertyKey, unknown>>>,
  props: Record<PropertyKey, unknown>
) => ReactElement;

type AnyObject = Record<PropertyKey, unknown>;

export type Decorator<TProps extends AnyObject | undefined = undefined> =
  TProps extends undefined
    ? (element: ReactNode) => ReactElement
    : (element: ReactNode, props: TProps) => ReactElement;

export type DecoratorProvider<TData = undefined> = TData extends undefined
  ? () => StoryDecorator
  : (data: TData) => StoryDecorator;
