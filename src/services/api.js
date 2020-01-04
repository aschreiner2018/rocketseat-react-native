import axios from 'axios';

const api = axios.create({
  baseURL: 'http://albert-nodejs.herokuapp.com/api',
});

export default api;
