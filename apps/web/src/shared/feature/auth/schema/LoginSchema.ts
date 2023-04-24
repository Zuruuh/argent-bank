import { z } from 'zod';

export const LoginSchema = z.union([
  z.object({
    status: z.literal(200),
    message: z.string(),
    body: z.object({
      token: z.string(),
    }),
  }),
  z.object({
    status: z.literal(400),
    message: z.string(),
  }),
]);
