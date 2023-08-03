import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import { SessionsGetAllResponseDto } from "@features/authorization";

export class SessionsApi {
    static async getAll(config?: RequestConfig) {
        const url = "/api/v1/sessions";
        return await api.get<SessionsGetAllResponseDto>(url, config);
    }

    static async remove(id: string, config?: RequestConfig) {
        const url = `/api/v1/sessions/${id}`;
        return await api.delete(url, config);
    }

    static async refresh(config?: RequestConfig) {
        const url = "/api/v1/sessions/refresh";
        return await api.post(url, {}, config);
    }
}
