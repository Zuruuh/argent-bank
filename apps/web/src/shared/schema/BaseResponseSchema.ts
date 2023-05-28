import { z } from 'zod';

export const BaseResponseSchema = z.object({
  message: z.string(),
  status: z.number(),
});

export type BaseResponse = z.infer<typeof BaseResponseSchema>;
