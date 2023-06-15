import { IDSchema, ID } from '../models/Id';
import { faker } from '@faker-js/faker';

export const generateId = (): ID =>
  IDSchema.parse(
    Array.from({ length: 24 })
      .map(() => faker.number.int({ min: 0, max: 9 }))
      .join('')
  );
