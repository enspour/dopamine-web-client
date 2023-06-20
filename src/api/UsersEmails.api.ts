import { axios } from "@utils";

import { AddEmailDto, ConfirmEmailDto } from "@dto";

export default class UsersEmailsApi {
    static async getAll() {
        return await axios.get("/api/v1/users/emails");
    }

    static async add(data: AddEmailDto) {
        return await axios.post("/api/v1/users/emails", data);
    }

    static async remove(id: number) {
        return await axios.delete(`/api/v1/users/emails/${id}`);
    }

    static async confirm(data: ConfirmEmailDto) {
        return await axios.post(`/api/v1/users/emails/confirm`, data);
    }

    static async resend(id: number) {
        return await axios.get(`/api/v1/users/emails/resend/${id}`);
    }
}
