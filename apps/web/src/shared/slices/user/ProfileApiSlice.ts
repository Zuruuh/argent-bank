import { User } from '~/shared/models/User';
import { AuthenticatedApiSlice } from '../AuthenticatedApiSlice';
import { ProfileResponseSchema } from '~/shared/schema/ProfileResponseSchema';
import { queryHookEmptyParameterDecorator } from '~/shared/decorators/queryHookEmptyParameterDecorator';

const PROFILE_CACHE_KEY = '_self';

export const ProfileApiSlice = AuthenticatedApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<User, Record<string, never>>({
      query: () => ({
        url: '/api/v1/user/profile',
        method: 'POST',
      }),
      transformResponse: (response) =>
        ProfileResponseSchema.parse(response).body,
    }),
  }),
}).enhanceEndpoints({
  addTagTypes: [PROFILE_CACHE_KEY],
  endpoints: { profile: { providesTags: [PROFILE_CACHE_KEY] } },
});

export const useProfileQuery = queryHookEmptyParameterDecorator(
  ProfileApiSlice.useProfileQuery
);

export const clearProfileCache = () =>
  ProfileApiSlice.util.invalidateTags([PROFILE_CACHE_KEY]);
