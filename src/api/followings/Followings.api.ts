import { axios } from "@utils";

import { FollowingsGetAllResponseDto } from "@dto";

export class Followings {
    static async getAll(userId: number) {
        const url = `/api/v1/followings/${userId}`;
        return await axios.get<FollowingsGetAllResponseDto>(url);
    }

    static async follow(userId: number) {
        const url = `/api/v1/followings/follow/${userId}`;
        return await axios.get(url);
    }

    static async unfollow(userId: number) {
        const url = `/api/v1/followings/unfollow/${userId}`;
        return await axios.get(url);
    }
}
