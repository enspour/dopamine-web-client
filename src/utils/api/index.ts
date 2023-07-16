import { _axios } from "./axios";

import { ApiResponse, RequestConfig } from "@interfaces";

import { getComponentType } from "../getTypeComponent";

const domain = process.env.DOMAIN || "localhost:8080";

const uri = (url: string) => `http://${domain}${url}`;

export const api = {
    get: async <TResult = never>(
        urn: string,
        config?: RequestConfig
    ): Promise<ApiResponse<TResult>> => {
        const type = getComponentType();

        if (type === "server") {
            return await _axios.get<TResult>(uri(urn), config);
        }

        return await _axios.get<TResult>(urn, config);
    },

    post: async <TResult = never>(
        urn: string,
        data: any,
        config?: RequestConfig
    ): Promise<ApiResponse<TResult>> => {
        const type = getComponentType();

        if (type === "server") {
            return await _axios.post<TResult>(uri(urn), data, config);
        }

        return await _axios.post<TResult>(urn, data, config);
    },

    put: async <TResult = never>(
        urn: string,
        data: any,
        config?: RequestConfig
    ): Promise<ApiResponse<TResult>> => {
        const type = getComponentType();

        if (type === "server") {
            return await _axios.put<TResult>(uri(urn), data, config);
        }

        return await _axios.put<TResult>(urn, data, config);
    },

    delete: async <TResult = never>(
        urn: string,
        config?: RequestConfig
    ): Promise<ApiResponse<TResult>> => {
        const type = getComponentType();

        if (type === "server") {
            return await _axios.delete<TResult>(uri(urn), config);
        }

        return await _axios.delete<TResult>(urn, config);
    },
};
