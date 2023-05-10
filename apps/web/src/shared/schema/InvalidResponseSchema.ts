import { z } from 'zod';

export const InvalidResponseSchema = z.object({
  message: z.string(),
  status: z.number(),
});

export type InvalidResponse = z.infer<typeof InvalidResponseSchema>;

export const ReduxWrappedInvalidResponseSchema = z.object({
  status: z.number(),
  data: InvalidResponseSchema,
});

export type ReduxWrappedInvalidResponseSchema = z.infer<
  typeof ReduxWrappedInvalidResponseSchema
>;
