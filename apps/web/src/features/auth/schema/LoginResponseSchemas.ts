import { z } from 'zod';

export const LoginResponseSchema = z.object({
  status: z.literal(200),
  message: z.string(),
  body: z.object({
    token: z.string(),
  }),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
