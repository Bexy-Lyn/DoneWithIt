import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.7.213:9000/api",
});

export default apiClient;
