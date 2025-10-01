import axios from 'axios';

// In development, use CRA proxy by default (same-origin requests)
// If REACT_APP_API_BASE_URL is set, it will take precedence
const baseURL = process.env.REACT_APP_API_BASE_URL || '';

const apiClient = axios.create({
  baseURL,
  timeout: 10000
});

export default apiClient;


