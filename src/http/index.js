import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const authBase = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('token') || ''}`,
  },
});

authBase.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const response = await axios.post(`${BASE_URL}/refresh`, {
          refresh_token: sessionStorage.getItem('refresh') || '',
        });
        const { access_token, refresh_token } = response.data;
        sessionStorage.setItem('token', access_token);
        sessionStorage.setItem('refresh', refresh_token);

        error.response.config.headers.Authorization = `Bearer ${access_token}`;
        return axios(error.response.config);
      } catch (refreshError) {
      }
    }

    return Promise.reject(error);
  }
);
