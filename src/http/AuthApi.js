import { authBase } from '.';

class AuthApi {
  async login({ email, password }) {
    try {
      const response = await authBase.post('/login', { email, password });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    try {
      const response = await authBase.get('/check-token');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async register() {
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
  }

  async refresh() {
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
  }

  async logout() {
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
  }
}

export default new AuthApi();
