import { REACT_BASE_URL } from "@/constants/env";
import axios, { InternalAxiosRequestConfig } from "axios";
import { getAPIRouteByName } from "./route-handler";
import { routeModifier } from "@/types/route";

declare module "axios" {
  interface AxiosRequestConfig {
    // Add a new field to AxiosRequestConfig
    name?: string;
    modifier?: routeModifier;
    // This field will be used to determine whether the request is a mock request or not
    isMock?: boolean;
  }
}

const myAxios = axios.create({
  baseURL: REACT_BASE_URL,
  timeout: 1000 * 60, // 10 seconds
});

myAxios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (config.name) {
    config.url = getAPIRouteByName(config.name, config.modifier);
  }
  return config;
});

myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response && error.response.data);
  }
);

export default myAxios;
