import axios from "axios";

const API_BASE_URL = "https://crud.teamrabbil.com/api/v1"; // Replace with your API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createProduct = (product) =>
  api.post(
    "/CreateProduct",

    product,

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
export const getProducts = () => api.get("/ReadProduct");
export const updateProduct = (id, product) =>
  api.post(`UpdateProduct/${id}`, product, {
    headers: {
      "Content-Type": "application/json",
    },
  });
export const deleteProduct = (product) =>
  api.get(`DeleteProduct/${product._id}`);
