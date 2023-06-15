import type { Decorator, StoryDecorator } from './Decorator.types';

export function createProvider<
  DecoratorProps extends Record<PropertyKey, unknown> | undefined = undefined
>(
  decorator: Decorator<DecoratorProps>
): DecoratorProps extends undefined
  ? () => StoryDecorator
  : (props: DecoratorProps) => StoryDecorator {
  // Typescript is angry here bcz the function can take either one or two args
  // BUT it shouldn't matter if we pass the 2nd one anyway if the function
  // is not expecting it so it's fine I guess ?

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (providerProps = undefined): StoryDecorator =>
    (story, props) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      decorator(story(props), providerProps);
}
