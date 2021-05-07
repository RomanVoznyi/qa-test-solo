import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerRequest = async ({ name, email, password }) => {
  return await wrapper(
    axios.post('/api/users/register', {
      name,
      email,
      password,
    }),
    'Registration successful. Please verify your email.',
    '_',
  );
};

const loginRequest = async ({ email, password }) => {
  const user = await wrapper(
    axios.post('/api/users/login', {
      email,
      password,
    }),
    'You was successfully logged in',
    '_',
  );

  token.set(user.token.accessToken);
  return user;
};

const logoutRequest = async () => {
  const data = await wrapper(
    axios.post('/api/users/logout', {}),
    'You was successfully logged out',
    '_',
  );
  token.unset();
  return data;
};

const currentRequest = async () => {
  return await wrapper(axios.get('/api/users/current', {}), '', '');
};

const refreshRequest = async refreshToken => {
  return await wrapper(
    axios.post('/api/users/refresh', { refreshToken }),
    '',
    '',
  );
};

const wrapper = async (body, OkMes, NotOkMes) => {
  try {
    const { data } = await body;

    if (OkMes !== '') {
      toast.success(OkMes);
    }
    return data.data;
  } catch (error) {
    if (NotOkMes !== '') {
      toast.warn(error.response.data.data.message);
    }
    throw new Error(error);
  }
};

export {
  registerRequest,
  loginRequest,
  logoutRequest,
  currentRequest,
  refreshRequest,
};
