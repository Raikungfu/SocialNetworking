import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "./configURL";

const Axios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error.response || error.message);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    const refreshToken = Cookies.get("refreshToken");

    if (refreshToken && error.response.status === 403) {
      try {
        const res = await axios.post(
          `${API_BASE_URL}/authentication/refreshToken`,
          {},
          {
            withCredentials: true,
          }
        );

        if (res.status === 200) {
          Cookies.set("accessToken", res.data.accessToken);
          return Promise.resolve(res);
        }
      } catch {
        console.log("Error");
        localStorage.clear();
        location.reload();
      }
    } else {
      console.log("Token expired");
    }
    return Promise.reject(error.response || error.message);
  }
);

export default Axios;
