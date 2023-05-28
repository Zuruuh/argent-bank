import { z } from 'zod';
import { BaseResponseSchema } from './BaseResponseSchema';

export const InvalidResponseSchema = BaseResponseSchema;
export type InvalidResponse = z.infer<typeof InvalidResponseSchema>;

export const ReduxWrappedInvalidResponseSchema = z.object({
  status: z.number(),
  data: InvalidResponseSchema,
});

export type ReduxWrappedInvalidResponseSchema = z.infer<
  typeof ReduxWrappedInvalidResponseSchema
>;
