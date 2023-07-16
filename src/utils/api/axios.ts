import axios from "axios";

import { ApiResponse, RequestConfig } from "@interfaces";

import "./interceptors";

export const _axios = {
    get: async <TResult = never>(
        url: string,
        config?: RequestConfig
    ): Promise<ApiResponse<TResult>> => {
        return await axios.get<any, ApiResponse<TResult>>(url, config);
    },

    post: async <TResult = never>(
        url: string,
        data: any,
        config?: RequestConfig
    ): Promise<ApiResponse<TResult>> => {
        return await axios.post<any, ApiResponse<TResult>>(url, data, config);
    },

    put: async <TResult = never>(
        url: string,
        data: any,
        config?: RequestConfig
    ) => {
        return await axios.put<any, ApiResponse<TResult>>(url, data, config);
    },

    delete: async <TResult = never>(url: string, config?: RequestConfig) => {
        return await axios.delete<any, ApiResponse<TResult>>(url, config);
    },
};
