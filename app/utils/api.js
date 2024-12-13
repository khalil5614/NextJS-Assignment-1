import axios from "axios";

const API_BASE_URL = "https://crud.teamrabbil.com/api/v1"; // Replace with your API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createProduct = (product) => api.post("/products", product);
export const getProducts = () => api.get("/ReadProduct");
export const updateProduct = (id, product) =>
  api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
