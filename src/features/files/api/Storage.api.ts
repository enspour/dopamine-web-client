import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import { StorageUploadFileResponseDto } from "../dto";

export class StorageApi {
    static async upload(data: FormData, config?: RequestConfig) {
        const url = "/api/v1/files/upload";
        return await api.post<StorageUploadFileResponseDto>(url, data, config);
    }
}
