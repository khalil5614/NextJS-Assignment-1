import axios from "axios";

const API_BASE_URL = "<API_BASE_URL>"; // Replace with your API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createProduct = (product) => api.post("/products", product);
export const getProducts = () => api.get("/products");
export const updateProduct = (id, product) =>
  api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
