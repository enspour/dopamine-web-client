import { axios } from "@utils";

import { FollowersGetAllResponseDto } from "@dto";

export class FollowersApi {
    static async getAll(userId: number) {
        const url = `/api/v1/followers/${userId}`;
        return await axios.get<FollowersGetAllResponseDto>(url);
    }
}
