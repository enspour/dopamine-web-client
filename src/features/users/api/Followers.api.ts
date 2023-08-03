import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import { FollowersGetAllResponseDto } from "@features/users";

export class FollowersApi {
    static async getAll(userId: number, config?: RequestConfig) {
        const url = `/api/v1/followers/${userId}`;
        return await api.get<FollowersGetAllResponseDto>(url, config);
    }
}
