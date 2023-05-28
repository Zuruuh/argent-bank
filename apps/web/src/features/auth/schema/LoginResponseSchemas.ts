import { z } from 'zod';
import { BaseResponseSchema } from '~/shared/schema/BaseResponseSchema';

export const LoginResponseSchema = BaseResponseSchema.merge(
  z.object({
    status: z.literal(200),
    body: z.object({
      token: z.string(),
    }),
  })
);

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
