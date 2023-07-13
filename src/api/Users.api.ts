import { UsersGetOneResponseDto } from "@dto";
import { axios } from "@utils";

export class UsersApi {
    static async me() {
        return await axios.get<UsersGetOneResponseDto>("/api/v1/users/me");
    }

    static async getOne(id: number) {
        return await axios.get<UsersGetOneResponseDto>(`/api/v1/users/${id}`);
    }

    static async updateName(name: string) {
        return await axios.put(`/api/v1/users/name`, {
            name,
        });
    }

    static async updateNickname(nickname: string) {
        return await axios.put(`/api/v1/users/nickname`, {
            nickname,
        });
    }

    static async updateAvatar(avatar: string) {
        return await axios.put(`/api/v1/users/name`, {
            avatar,
        });
    }

    static async updateStatus(status: string) {
        return await axios.put(`/api/v1/users/status`, {
            status,
        });
    }
}
