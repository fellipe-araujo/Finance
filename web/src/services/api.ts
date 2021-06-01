import axios from "axios";

const api = axios.create({
  baseURL: "https://app-finance-back.herokuapp.com",
});

export default api;
