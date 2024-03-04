import axios from "axios";
import constants from "./Constants";
import { TokenService } from "./StorageServices";

const ApiService = {
  init(baseURL) {
    // axios.defaults.baseURL = `http://10.1.22.140:2022/api/v1/`;
    // axios.defaults.baseURL = `http://192.168.0.153:2022/api/v1/`;
    // axios.defaults.baseURL = `http://192.168.1.4:2022/api/v1/`;
    // axios.defaults.baseURL = `http://127.0.0.1:2022/api/v1/`;
    // axios.defaults.baseURL = `http://192.168.29.167:2022/api/v1/`;
    axios.defaults.baseURL = `http://172.20.10.13:2022/api/v1/`;
    // axios.defaults.baseURL = `http://127.0.0.1:2022/api/v1/`;
    // axios.defaults.baseURL = `http://13.68.137.56:83/api/v1/`;
    // axios.defaults.baseURL = `https://test.northcott.com/Server/api/v1/`;
  },

  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.getToken()}`;
    // axios.defaults.headers.common["Content-Type"] = "application/json"
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  patch(resource, data) {
    return axios.patch(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    return axios(data);
  },
};

export default ApiService;
