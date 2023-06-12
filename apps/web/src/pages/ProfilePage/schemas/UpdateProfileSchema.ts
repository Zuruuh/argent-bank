import { z } from 'zod';

export const UpdateProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export type UpdateProfile = z.infer<typeof UpdateProfileSchema>;
