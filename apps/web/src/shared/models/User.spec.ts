import { assertType, test } from 'vitest';
import { UserSchema } from './User';
import { z } from 'zod';

test('It is defined', async () => {
  assertType<z.AnyZodObject>(UserSchema);
});
