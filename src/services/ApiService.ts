import axios from 'axios';
import config from '../config';

const ApiService = axios.create({
  baseURL: config.api.baseUrl,
  timeout: 1000,
});

// class ApiService {
//   async get(...args: any) {
//     return instance.get(...args);
//   }

//   async post(args) {
//     return instance.post(args);
//   }
// }

export default ApiService;
