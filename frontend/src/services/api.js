import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/posts' });

// Fetch all posts
export const fetchPosts = () => API.get('/');

// Fetch a single post by ID
export const fetchPost = (id) => API.get(`/${id}`);

// Create a new post
export const createPost = (newPost) => API.post('/', newPost);

// Update an existing post
export const updatePost = (id, updatedPost) => API.put(`/${id}`, updatedPost);

// Delete a post
export const deletePost = (id) => API.delete(`/${id}`);
