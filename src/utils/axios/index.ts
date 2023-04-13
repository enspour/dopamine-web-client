import a, { AxiosRequestConfig } from "axios";

import "./interceptors";

interface SuccessResponse<T> {
    statusCode: 200 | 201 | 202;
    data: T;
}

interface ErrorResponse {
    statusCode: 400 | 401 | 403 | 404 | 500;
    message: string;
    error: string;
}

interface NetworkError {
    statusCode: 0; // Network Error, Aborted Request, Timeout error
    message: string;
}

type Response<T> = SuccessResponse<T> | ErrorResponse | NetworkError;

const axios = {
    get: async <T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<Response<T>> => {
        return await a.get<any, Response<T>>(url, config);
    },

    post: async <T>(
        url: string,
        data: any,
        config?: AxiosRequestConfig
    ): Promise<Response<T>> => {
        return await a.post<any, Response<T>>(url, data, config);
    },

    put: async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
        return await a.put<any, Response<T>>(url, data, config);
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig) => {
        return await a.delete(url, config);
    },
};

export { axios };
