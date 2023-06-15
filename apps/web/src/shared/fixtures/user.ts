import { faker } from '@faker-js/faker';
import { User, UserSchema } from '../models/User';
import { generateId } from './id';

export const generateRandomUser = (): User =>
  UserSchema.parse({
    id: generateId(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    createdAt: faker.date.past().toString(),
    updatedAt: faker.date.past().toString(),
  } satisfies User);
