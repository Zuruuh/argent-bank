import { z } from 'zod';

const FIRST_NAME_EMPTY_MESSAGE = 'Please enter your first name';
const LAST_NAME_EMPTY_MESSAGE = 'Please enter your last name';

export const UpdateProfileSchema = z.object({
  firstName: z
    .string({ invalid_type_error: FIRST_NAME_EMPTY_MESSAGE })
    .nonempty(FIRST_NAME_EMPTY_MESSAGE),
  lastName: z
    .string({ invalid_type_error: LAST_NAME_EMPTY_MESSAGE })
    .nonempty(LAST_NAME_EMPTY_MESSAGE),
});

export type UpdateProfile = z.infer<typeof UpdateProfileSchema>;
