import axios, { CancelTokenSource } from "axios";
import AppConfig from "../appConfig";
// import { Logger } from "utils/Logger";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type ApiScope = "app" | "spotify"
export type RequestOptions = {
  apiScope?: ApiScope
  url: string
  query?: string
  headers?: any
  payload?: any
  method?: HttpMethod

}
export class RequestError {
  public errorCode = 0;
  public response: any;

  constructor(errorCode: number, response: any) {
    this.errorCode = errorCode;
    this.response = response;
  }

  getErrors(): ErrorItem[] | undefined {
    if (this.response && this.response.errors) {
      return this.response.errors as ErrorItem[];
    } else return undefined;
  }
}

export class ErrorItem {
  code?: string;
  message?: string;
}

export const axiosInstance = axios.create({
  // baseURL: BASE_SERVER_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" }
});
axiosInstance.interceptors.response.use(
  response => {
    // custom response handling
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(
  config => {
    console.log(`performing http ${config.method} to ${config.url} with options config`, config);
    config.headers = { ...config.headers, ...getCommonHeaders() };
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "x-api-key": "PMAK-5ecfa3c1e983670042432b8a-c36bf8582e83b7b9715a41b77f65533980"
  };
}

async function axiosRequest({
  apiScope = "app",
  ...requestOptions

}: RequestOptions) {
  try {
    const { headers, method, url, payload } = requestOptions;
    const finalUrl = AppConfig.APP_URL_MAPPINGS[apiScope] + url;
    // if(requestOptions)
    const result = await axiosInstance.request({
      url: finalUrl,
      headers: headers,
      data: payload,
      method
    });
    console.log(`request result for http ${method} to ${finalUrl}\n`, result);
    return result.data;
  } catch (err) {
    console.log("error in http request", JSON.stringify(err), requestOptions);
    throw err;
  }
}

export async function get<T>(requestOptions: RequestOptions, cancelTokenSource?: CancelTokenSource): Promise<T> {
  return axiosRequest({ method: "GET", ...requestOptions });
}

export async function put<T>(requestOptions: RequestOptions): Promise<T> {
  return axiosRequest({ method: "PUT", ...requestOptions });
}

export async function patch<T>(requestOptions: RequestOptions): Promise<T> {
  return axiosRequest({ method: "PATCH", ...requestOptions });
}

export async function post<T>(requestOptions: RequestOptions): Promise<T> {
  return axiosRequest({ method: "POST", ...requestOptions });
}

export async function restDelete<T>(requestOptions: RequestOptions, cancelTokenSource?: CancelTokenSource): Promise<T> {
  return axiosRequest({ method: "DELETE", ...requestOptions });
}
