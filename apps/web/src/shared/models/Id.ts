import { z } from 'zod';

export const IDSchema = z.string().regex(/^[a-fA-F0-9]{24}$/);

export type ID = z.infer<typeof IDSchema>;
