import { authBase } from '.';

class DataApi {
  async getBalances({ type, limit, page }) {
    try {
      const response = await authBase.get(`/balances`, {
        params: { type, limit, page },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getHistory({ page, limit }) {
    try {
      const response = await authBase.get('/history', {
        params: { limit, page },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getChat({ amount, currency,type }) {
    try {
      const response = await authBase.get(
        `/chat?source=lk&amount=${amount}&currency=${currency}&type=${type}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return e.response.data;
    }
  }
}

// eslint-disable-next-line react-hooks/exhaustive-deps, import/no-anonymous-default-export
export default new DataApi();
