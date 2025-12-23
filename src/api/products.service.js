import api from "./client";


export const getProducts = async (params) => {
  const res = await api.get("/products", { params });


  return Array.isArray(res.data) ? res.data : res.data.data || [];
};


export const createProduct = async (product) => {
  const { data } = await api.post("/products", product);
  return data;
};


export const updateProduct = async (id, product) => {
  const { data } = await api.put(`/products/${id}`, product);
  return data;
};


export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
