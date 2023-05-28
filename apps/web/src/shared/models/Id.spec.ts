import { test, expect, assertType } from 'vitest';
import { type ID, IDSchema } from './Id';
import { TypeEqual } from 'ts-expect';

test('The id schema regex', async () => {
  test('It matches a valid id', async () => {
    expect(IDSchema.parse('ABCDEF0123456789ABCDEF01')).toBeTypeOf('string');
  });

  test('It fails with invalid id', async () => {
    expect(() => IDSchema.parse('something')).toThrow();
  });

  test('The type should be a string', async () => {
    assertType<string>(IDSchema.parse('ABCDEF0123456789ABCDEF01'));
    assertType<TypeEqual<string, ID>>(true);
  });
});
