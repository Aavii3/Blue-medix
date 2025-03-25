import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// ✅ Users API
export const fetchUsers = async () => axios.get(`${BASE_URL}/users`);
export const fetchUserById = async (id) => axios.get(`${BASE_URL}/users/${id}`);
export const createUser = async (userData) => axios.post(`${BASE_URL}/users`, userData);
export const updateUser = async (id, updatedData) => axios.put(`${BASE_URL}/users/${id}`, updatedData);
export const deleteUser = async (id) => axios.delete(`${BASE_URL}/users/${id}`);

// ✅ Products API
export const fetchProducts = async () => axios.get(`${BASE_URL}/products`);
export const fetchProductById = async (id) => axios.get(`${BASE_URL}/products/${id}`);
export const createProduct = async (productData) => axios.post(`${BASE_URL}/products`, productData);
export const updateProduct = async (id, updatedData) => axios.put(`${BASE_URL}/products/${id}`, updatedData);
export const deleteProduct = async (id) => axios.delete(`${BASE_URL}/products/${id}`);
