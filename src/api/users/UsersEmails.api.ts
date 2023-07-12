import { axios } from "@utils";

import {
    EmailsAddDto,
    EmailsAddResponseDto,
    EmailsConfirmDto,
    EmailsGetAllResponseDto,
} from "@dto";

export class UsersEmailsApi {
    static async getAll() {
        const url = "/api/v1/users/emails";
        return await axios.get<EmailsGetAllResponseDto[]>(url);
    }

    static async add(data: EmailsAddDto) {
        const url = "/api/v1/users/emails";
        return await axios.post<EmailsAddResponseDto>(url, data);
    }

    static async remove(id: number) {
        return await axios.delete(`/api/v1/users/emails/${id}`);
    }

    static async confirm(data: EmailsConfirmDto) {
        return await axios.post(`/api/v1/users/emails/confirm`, data);
    }

    static async resend(id: number) {
        return await axios.get(`/api/v1/users/emails/resend/${id}`);
    }
}
