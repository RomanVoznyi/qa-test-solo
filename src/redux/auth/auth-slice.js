import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  refresh,
} from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
    subscription: '',
    role: '',
    avatar: '',
    token: {
      accessToken: null,
      refreshToken: null,
      expires_on: '',
    },
  },
  isLoggedIn: false,
  isLoading: false,
  error: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, actions) => {
      state.user = { ...actions.payload };
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = false;
    },
    [loginUser.fulfilled]: (state, actions) => {
      state.user = { ...actions.payload };
      state.user.token.accessToken = null;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = false;
    },
    [logoutUser.fulfilled]: (state, _actions) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = false;
    },
    [currentUser.fulfilled]: (state, actions) => {
      const temp = state.user.token.expires_on;
      state.user = { ...actions.payload };
      state.user.token.expires_on = temp;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = false;
    },
    [refresh.fulfilled]: (state, actions) => {
      state.user.token.expires_on = actions.payload.token.expires_on;
      state.isLoading = false;
      state.error = false;
    },
    [registerUser.pending]: (state, _actions) => {
      state.isLoading = true;
      state.error = false;
    },
    [loginUser.pending]: (state, _actions) => {
      state.isLoading = true;
      state.error = false;
    },
    [logoutUser.pending]: (state, _actions) => {
      state.isLoading = true;
      state.error = false;
    },
    [currentUser.pending]: (state, _actions) => {
      state.isLoading = true;
      state.error = false;
    },
    [refresh.pending]: (state, _actions) => {
      state.isLoading = true;
      state.error = false;
    },
    [registerUser.rejected]: (state, _actions) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [loginUser.rejected]: (state, _actions) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [logoutUser.rejected]: (state, _actions) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [currentUser.rejected]: (state, _actions) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [refresh.rejected]: (state, _actions) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default authSlice.reducer;
