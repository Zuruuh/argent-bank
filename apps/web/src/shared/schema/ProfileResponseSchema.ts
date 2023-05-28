import { z } from 'zod';
import { BaseResponseSchema } from './BaseResponseSchema';
import { UserSchema } from '../models/User';

export const ProfileResponseSchema = BaseResponseSchema.merge(
  z.object({
    body: UserSchema,
  })
);

export type ProfileResponse = z.infer<typeof ProfileResponseSchema>;
