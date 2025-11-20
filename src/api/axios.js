// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
// });

// export const getProducts = () => API.get("/products");
// export const getProduct = (id) => API.get(`/products/${id}`);
// export const addProduct = (data) => API.post("/products", data);
// export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
// export const deleteProduct = (id) => API.delete(`/products/${id}`);

// export default API;
import axios from "axios";

if (localStorage.getItem("token")) {
  sessionStorage.setItem("token", localStorage.getItem("token") || "");
}

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosConfig.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosConfig;
