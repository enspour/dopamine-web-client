import { RequestHeaders } from "./RequestHeaders.interface";

export interface RequestConfig {
    headers?: RequestHeaders;
    signal?: AbortSignal;
}

export const isRequestConfig = (config: any): config is RequestConfig => {
    if (config && typeof config === "object") {
        return true;
    }

    return false;
};
