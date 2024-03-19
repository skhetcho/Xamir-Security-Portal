import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/command-api",
});

export const runNmap = (payload) => api.post(`/nmap`, payload);

const userApi = {
  runNmap,
};

export default userApi;
