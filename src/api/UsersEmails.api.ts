import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import {
    EmailsAddDto,
    EmailsAddResponseDto,
    EmailsConfirmDto,
    EmailsGetAllResponseDto,
} from "@dto";

export class UsersEmailsApi {
    static async getAll(config?: RequestConfig) {
        const url = "/api/v1/users/emails";
        return await api.get<EmailsGetAllResponseDto[]>(url, config);
    }

    static async add(data: EmailsAddDto, config?: RequestConfig) {
        const url = "/api/v1/users/emails";
        return await api.post<EmailsAddResponseDto>(url, data, config);
    }

    static async remove(id: number, config?: RequestConfig) {
        const url = `/api/v1/users/emails/${id}`;
        return await api.delete(url, config);
    }

    static async confirm(data: EmailsConfirmDto, config?: RequestConfig) {
        const url = `/api/v1/users/emails/confirm`;
        return await api.post(url, data, config);
    }

    static async resend(id: number, config?: RequestConfig) {
        const url = `/api/v1/users/emails/resend/${id}`;
        return await api.get(url, config);
    }
}
