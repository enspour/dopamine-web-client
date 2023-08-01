import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import {
    UserEmailsAddDto,
    UserEmailsAddResponseDto,
    UserEmailsConfirmDto,
    UserEmailsGetAllResponseDto,
} from "./dto";

export class UserEmailsApi {
    static async getAll(config?: RequestConfig) {
        const url = "/api/v1/users/emails";
        return await api.get<UserEmailsGetAllResponseDto[]>(url, config);
    }

    static async add(data: UserEmailsAddDto, config?: RequestConfig) {
        const url = "/api/v1/users/emails";
        return await api.post<UserEmailsAddResponseDto>(url, data, config);
    }

    static async remove(id: number, config?: RequestConfig) {
        const url = `/api/v1/users/emails/${id}`;
        return await api.delete(url, config);
    }

    static async confirm(data: UserEmailsConfirmDto, config?: RequestConfig) {
        const url = `/api/v1/users/emails/confirm`;
        return await api.post(url, data, config);
    }

    static async resend(id: number, config?: RequestConfig) {
        const url = `/api/v1/users/emails/resend/${id}`;
        return await api.get(url, config);
    }
}
