import {
  afterEach,
  assertType,
  describe,
  expect,
  expectTypeOf,
  test,
} from 'vitest';
import { providePersister } from './providePersister';
import { type PersisterInterface } from './PersisterInterface.d';
import { z } from 'zod';

const persister = providePersister();

describe('Local Storage implementation', async () => {
  afterEach(() => {
    persister.clear();
  });

  describe('I get/set an item', async () => {
    test('That does not exists', async () => {
      const item = persister.get('key', z.string());

      expect(item.success).toBeFalsy();
    });

    test('That exists and does not match given schema', async () => {
      persister.set('key', 'something');
      const item = persister.get('key', z.number());

      expect(item.success).toBeFalsy();
    });

    test('That exists', async () => {
      persister.set('key', 'something');
      const item = persister.get('key', z.string());

      expect(item.success).toBeTruthy();
      if (item.success) {
        expect(item.data).toBe('something');
      }
    });
  });

  test('I remove an item', async () => {
    persister.set('key', 'whatever');
    expect(persister.has('key')).toBeTruthy();

    persister.remove('key');
    expect(persister.has('key')).toBeFalsy();
  });

  test('I check that the persister contains an item', async () => {
    expect(persister.has('something')).toBeFalsy();
    persister.set('something', 'whatever');

    expect(persister.has('something')).toBeTruthy();
  });

  test('I can clear the persister', async () => {
    persister.set('something', 'whatever');
    persister.clear();
    expect(persister.has('something')).toBeFalsy();
  });

  test('The persister returns an implementation of PersisterInterface.d', async () => {
    assertType<PersisterInterface>(persister);
    expectTypeOf(persister.clear).toBeFunction();
    expectTypeOf(persister.get).toBeFunction();
    expectTypeOf(persister.set).toBeFunction();
    expectTypeOf(persister.has).toBeFunction();
    expectTypeOf(persister.remove).toBeFunction();
  });
});
