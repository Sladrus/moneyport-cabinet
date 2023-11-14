import { authBase } from '.';

class DataApi {
  async getBalances() {
    try {
      const response = await authBase.get('/balances');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getHistory() {
    try {
      const response = await authBase.get('/history');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new DataApi();
