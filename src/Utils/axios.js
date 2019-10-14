import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/sarzkir/fakedb"
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
