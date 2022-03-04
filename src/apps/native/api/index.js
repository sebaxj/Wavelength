import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
	baseURL: apiURL,
});

// USER
export const createUser = (payload) => api.post(`/user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const getUserById = (id) => api.get(`/user/${id}`);

const apis = {
	createUser,
	getAllUsers,
	getUserById,
};

export default apis;
