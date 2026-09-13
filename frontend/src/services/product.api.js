import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/product",
  withCredentials: true,
});

export const getAllProducts = async () => {
  const response = await api.get("/getallproducts");
  return response.data;
};

export const addProducts = async (productData) => {
  const response = await api.post("/createproduct", productData);
  return response.data;
};
export const deleteproduct = async (productId) => {
  const response = await api.post("/deleteproduct", { productId });
  return response.data;
};

export const updateproduct = async (productId) => {
  const response = await api.post("/updateproduct", { productId });
  return response.data;
};
