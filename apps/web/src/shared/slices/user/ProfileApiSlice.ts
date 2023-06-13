import { User } from '~/shared/models/User';
import { AuthenticatedApiSlice } from '../AuthenticatedApiSlice';
import { ProfileResponseSchema } from '~/shared/schema/ProfileResponseSchema';
import { queryHookEmptyParameterDecorator } from '~/shared/decorators/queryHookEmptyParameterDecorator';
import { UpdateProfile } from '~/pages/ProfilePage/schemas/UpdateProfileSchema';

const PROFILE_CACHE_KEY = '_self';

export const ProfileApiSlice = AuthenticatedApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, Record<string, never>>({
      query: () => ({
        url: '/api/v1/user/profile',
        method: 'POST',
      }),
      transformResponse: (response) =>
        ProfileResponseSchema.parse(response).body,
    }),
    updateProfile: builder.mutation<User, UpdateProfile>({
      query: (body) => ({
        url: '/api/v1/user/profile',
        method: 'PUT',
        body,
      }),
      transformResponse: (response) =>
        ProfileResponseSchema.parse(response).body,
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          ProfileApiSlice.util.updateQueryData('getProfile', {}, (draft) => {
            draft.firstName = body.firstName;
            draft.lastName = body.lastName;
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patch.undo();
        }
      },
    }),
  }),
}).enhanceEndpoints({
  addTagTypes: [PROFILE_CACHE_KEY],
  endpoints: {
    getProfile: { providesTags: [PROFILE_CACHE_KEY] },
  },
});

export const useProfileQuery = queryHookEmptyParameterDecorator(
  ProfileApiSlice.useGetProfileQuery
);

export const useProfileMutation = ProfileApiSlice.useUpdateProfileMutation;

export const clearProfileCache = () =>
  ProfileApiSlice.util.invalidateTags([PROFILE_CACHE_KEY]);
