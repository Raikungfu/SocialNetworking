import axios from "axios";
import { API_BASE_URL } from "./configURL";
import Cookies from "js-cookie";



const Axios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});


Axios.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
    }
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
    let refreshToken = Cookies.get("refreshToken");
    
    if (refreshToken && error.response.status === 403) {
      try {
            const res = await axios
                .post(
                    `${API_BASE_URL}/authentication/refreshToken`,
                    {},
                    {
                        withCredentials: true,
                    }
                );

            if (res.status === 200) {
                Cookies.set("accessToken", res.data.accessToken);
                return Promise.resolve(res.data);
            }
        } catch {
            console.log("Error");
            localStorage.clear();
            location.reload();
        }
    }else{
        console.log("Token expired")
    }
    return Promise.reject(error.response || error.message);
  }
);

export default Axios;
