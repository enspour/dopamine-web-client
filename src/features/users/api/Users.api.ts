import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import { UsersGetOneResponseDto } from "./dto";

export class UsersApi {
    static async me(config?: RequestConfig) {
        const url = "/api/v1/users/me";
        return await api.get<UsersGetOneResponseDto>(url, config);
    }

    static async getOne(id: number, config?: RequestConfig) {
        const url = `/api/v1/users/${id}`;
        return await api.get<UsersGetOneResponseDto>(url, config);
    }

    static async updateName(name: string, config?: RequestConfig) {
        const url = "/api/v1/users/name";
        const data = { name };

        return await api.put(url, data, config);
    }

    static async updateNickname(nickname: string, config?: RequestConfig) {
        const url = "/api/v1/users/nickname";
        const data = { nickname };

        return await api.put(url, data, config);
    }

    static async updateAvatar(avatar: string, config?: RequestConfig) {
        const url = "/api/v1/users/name";
        const data = { avatar };

        return await api.put(url, data, config);
    }

    static async updateStatus(status: string, config?: RequestConfig) {
        const url = "/api/v1/users/status";
        const data = { status };

        return await api.put(url, data, config);
    }
}
