import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/user-api",
});

export const insertFeedback = (payload) => api.post(`/feedback`, payload);

const userApi = {
  insertFeedback,
};

export default userApi;
