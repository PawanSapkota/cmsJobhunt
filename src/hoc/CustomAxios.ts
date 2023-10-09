import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const instance = axios.create({
  baseURL: "http://localhost:4002",
});

instance.defaults.headers.common["Authorization"] = "Brearer" + token;
instance.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: `Brearer` + token,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
