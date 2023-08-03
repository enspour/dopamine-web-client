import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import { FollowingsGetAllResponseDto } from "../dto";

export class FollowingsApi {
    static async getAll(userId: number, config?: RequestConfig) {
        const url = `/api/v1/followings/${userId}`;
        return await api.get<FollowingsGetAllResponseDto>(url, config);
    }

    static async follow(userId: number, config?: RequestConfig) {
        const url = `/api/v1/followings/follow/${userId}`;
        return await api.get(url, config);
    }

    static async unfollow(userId: number, config?: RequestConfig) {
        const url = `/api/v1/followings/unfollow/${userId}`;
        return await api.get(url, config);
    }
}
