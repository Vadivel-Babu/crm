// src/api/auth.js
import api from "./api";

export const loginUser = async (name, password) => {
  const res = await api.post("/auth/login", { name, password });
  return res.data;
};

export const registerUser = async (firstname, lastname, email, password) => {
  const res = await api.post("/auth/register", {
    firstname,
    lastname,
    email,
    password,
  });
  return res.data;
};
