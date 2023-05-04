import { z } from 'zod';

export const LoginValidResponseSchema = z.object({
  status: z.literal(200),
  message: z.string(),
  body: z.object({
    token: z.string(),
  }),
});

export type LoginValidResponse = z.infer<typeof LoginValidResponseSchema>;

export const LoginErrorResponseSchema = z.object({
  status: z.literal(400),
  message: z.string(),
});

export type LoginErrorResponse = z.infer<typeof LoginErrorResponseSchema>;
