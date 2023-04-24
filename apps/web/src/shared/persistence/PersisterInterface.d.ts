import { z } from 'zod';

export interface PersisterInterface {
  has(key: string): boolean;
  get<TSchema extends z.Schema>(
    key: string,
    schema: TSchema
  ): z.SafeParseReturnType<unknown, z.infer<TSchema>>;
  set(key: string, value: string): void;
  remove(key: string): void;
  clear(): void;
}
