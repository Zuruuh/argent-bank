import { z } from 'zod';

export const LoginBodySchema = z.object({
  email: z
    .string()
    .email("Votre email n'est pas valide")
    .nonempty('Veuillez entrer votre email'),
  password: z.string().nonempty('Veuillez entrer votre mot de passe'),
});

export type LoginBody = z.infer<typeof LoginBodySchema>;
