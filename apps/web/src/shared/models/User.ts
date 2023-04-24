import { z } from 'zod';
import { IDSchema } from '~/shared/models/Id';

export const UserSchema = z.object({
  id: IDSchema,
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;
