import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerRequest,
  loginRequest,
  logoutRequest,
  currentRequest,
  refreshRequest,
} from '../../services/api-service';

const registerUser = createAsyncThunk('users/register', async newUser => {
  return await registerRequest(newUser);
});

const loginUser = createAsyncThunk('users/login', async userData => {
  return await loginRequest(userData);
});

const logoutUser = createAsyncThunk('users/logout', async (_arg, thunkAPI) => {
  await checkUpdate(thunkAPI);
  return await logoutRequest();
});

const currentUser = createAsyncThunk(
  'users/current',
  async (_arg, thunkAPI) => {
    await checkUpdate(thunkAPI);
    const user = await currentRequest();

    return user;
  },
);

const checkUpdate = async thunkAPI => {
  const { token } = thunkAPI.getState().users.user;

  if (
    !token ||
    token?.expires_on === '' ||
    token?.refreshToken === '' ||
    token.expires_on > Date.now()
  ) {
    return;
  }

  await thunkAPI.dispatch(refresh(token.refreshToken));
};

const refresh = createAsyncThunk('users/refresh', async refreshToken => {
  return await refreshRequest(refreshToken);
});

export { registerUser, loginUser, logoutUser, currentUser, refresh };
