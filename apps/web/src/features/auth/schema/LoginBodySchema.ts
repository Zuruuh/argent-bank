import { z } from 'zod';

export const LoginBodySchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export type LoginBody = z.infer<typeof LoginBodySchema>;
