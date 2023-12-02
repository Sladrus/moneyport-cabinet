import axios from 'axios';

axios.defaults.withCredentials = true;

const BASE_URL = process.env.REACT_APP_BASE_URL;
const loading = false;

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
    // loading = true;
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${BASE_URL}/refresh`,
          {},
          {
            withCredentials: true,
          }
        );
        const { access_token, refresh_token } = response.data;

        sessionStorage.setItem('token', access_token);
        sessionStorage.setItem('refresh', refresh_token);

        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axios(originalRequest);
      } catch (error) {}
    }

    return Promise.reject(error);
  }
);
