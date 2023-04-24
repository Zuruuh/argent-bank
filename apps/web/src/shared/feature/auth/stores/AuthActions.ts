import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginSchema } from '~/shared/feature/auth/schema/LoginSchema';
import { providerPersister } from '~/shared/persistence/PersisterProvider';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    payload: { password: string; email: string },
    { rejectWithValue, abort }
  ) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/v1/user/login`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const parsedData = LoginSchema.safeParse(await response.json());
    if (!parsedData.success) {
      abort('Invalid response from api!');
      console.error(parsedData.error);

      return;
    }

    const { data: body } = parsedData;
    if (body.status === 400) {
      rejectWithValue(body.message);

      return;
    }

    const {
      body: { token },
    } = body;

    const persister = providerPersister();
    persister.set('token', token);

    return token;
  }
);
