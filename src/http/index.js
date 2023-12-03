import axios from 'axios';

let refreshingFunc = undefined;

axios.defaults.withCredentials = true;

const BASE_URL = process.env.REACT_APP_BASE_URL;

function isUnauthorizedError(error) {
  const {
    response: { status, statusText },
  } = error;
  return status === 401;
}

export async function refreshToken() {
  const response = await axios.post(
    `${BASE_URL}/refresh`,
    {},
    {
      withCredentials: true,
    }
  );

  return response?.data;
}

export const authBase = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authBase.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authBase.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 500) {
      return axios(originalRequest);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if (!refreshingFunc) refreshingFunc = refreshToken();

        const { access_token, refresh_token } = await refreshingFunc;
        console.log({ access_token, refresh_token });

        sessionStorage.setItem('token', access_token);
        sessionStorage.setItem('refresh', refresh_token);

        originalRequest.headers.Authorization = `Bearer ${access_token}`;

        try {
          return axios(originalRequest);
        } catch (innerError) {
          if (isUnauthorizedError(innerError)) {
            throw innerError;
          }
        }
      } catch (error) {
        sessionStorage.removeItem('token');

        window.location = `${window.location.origin}/login`;
      } finally {
        refreshingFunc = undefined;
      }
    }

    return Promise.reject(error);
  }
);
