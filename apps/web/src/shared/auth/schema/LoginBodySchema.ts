import { z } from 'zod';

export const LoginBodySchema = z.object({
  email: z
    .string()
    .email('This email is not valid')
    .nonempty('Please enter your email address'),
  password: z.string().nonempty('Please enter your password'),
});

export type LoginBody = z.infer<typeof LoginBodySchema>;
