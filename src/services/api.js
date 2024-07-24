// src/services/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getItems = async () => {
  return await axios.get(`${API_URL}/posts`);
};

export const getItem = async (id) => {
  return await axios.get(`${API_URL}/posts/${id}`);
};

export const createItem = async (item) => {
  return await axios.post(`${API_URL}/posts`, item);
};

export const updateItem = async (id, updatedItem) => {
  return await axios.put(`${API_URL}/posts/${id}`, updatedItem);
};

export const deleteItem = async (id) => {
  return await axios.delete(`${API_URL}/posts/${id}`);
};
