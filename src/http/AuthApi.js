import Cookies from "js-cookie";
import { authBase } from ".";

class AuthApi {
  async login({ email, password, client_id }) {
    try {
      const response = await authBase.post("/login", {
        email,
        password,
        client_id,
      });
      console.log(Cookies.get("XSRF-TOKEN"));

      return response.data;
    } catch (e) {
      console.log(e);
      return e?.response?.data;
    }
  }

  async checkAuth() {
    try {
      const response = await authBase.get("/check-token");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async register({ name, email, phone, password, client_id, utms }) {
    try {
      const response = await authBase.post("/register", {
        name,
        email,
        phone,
        password,
        client_id,
        utms,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return e?.response?.data;
    }
  }

  async checkReset({ token }) {
    try {
      const response = await authBase.post("/check-reset-token", {
        token,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return e?.response?.data;
    }
  }

  async updatePassword({ token, email, password }) {
    try {
      const response = await authBase.post("/new-password ", {
        token,
        email,
        password,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return e?.response?.data;
    }
  }

  async updateUser({ token, email, name, phone, ym_client_id, password }) {
    try {
      const response = await authBase.post("/update-user ", {
        name,
        phone,
        token,
        email,
        ym_client_id,
        password,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return e?.response?.data;
    }
  }

  async refresh() {
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });
  }

  async recoveryPass({ email }) {
    try {
      const response = await authBase.post("/reset-password", { email });
      return response.data;
    } catch (e) {
      console.log(e);
      return e?.response?.data;
    }
  }

  async logout() {
    try {
      const response = await authBase.get("/logout");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthApi();
