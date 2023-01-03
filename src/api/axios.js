import axios from "axios";

const BASE_URL = "http://localhost:8001/api/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export default authApi;