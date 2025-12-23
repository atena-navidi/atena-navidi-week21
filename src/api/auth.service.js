

//src/api/auth.service.js
import api from "./client";

export const loginApi = async (data) => {
  const { data: res } = await api.post("/auth/login", data);
  return res;
};

export const registerApi = async (data) => {
  const { data: res } = await api.post("/auth/register", data);
  return res;
};


