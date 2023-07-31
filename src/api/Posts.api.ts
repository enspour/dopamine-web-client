import { api } from "@utils";

import { RequestConfig } from "@interfaces";

import {
    PostsCreateDto,
    PostsGetManyResponseDto,
    PostsGetOneResponseDto,
    PostsUpdateImagesDto,
    PostsUpdateTextDto,
} from "@dto";

export class PostsApi {
    static async getOne(id: string, config?: RequestConfig) {
        const url = `/api/v1/posts/${id}`;
        return await api.get<PostsGetOneResponseDto>(url, config);
    }

    static async getManyByUserId(userId: number, config?: RequestConfig) {
        const url = `/api/v1/posts/by-user-ids/${userId}`;
        return await api.get<PostsGetManyResponseDto>(url, config);
    }

    static async getManyByUserIds(userIds: number[], config?: RequestConfig) {
        const url = `/api/v1/posts/by-user-ids/${userIds.join(",")}`;
        return await api.get<PostsGetManyResponseDto>(url, config);
    }

    static async create(data: PostsCreateDto, config?: RequestConfig) {
        const url = "/api/v1/posts";
        return await api.post<PostsGetOneResponseDto>(url, data, config);
    }

    static async remove(id: string, config?: RequestConfig) {
        const url = `/api/v1/posts/${id}`;
        return await api.delete(url, config);
    }

    static async updateText(data: PostsUpdateTextDto, config?: RequestConfig) {
        const url = "/api/v1/posts/text";
        return await api.put(url, data, config);
    }

    static async updateImages(
        data: PostsUpdateImagesDto,
        config?: RequestConfig
    ) {
        const url = "/api/v1/posts/text";
        return await api.put(url, data, config);
    }

    static async like(id: string, config?: RequestConfig) {
        const url = `/api/v1/posts/like/${id}`;
        return await api.post(url, {}, config);
    }

    static async unlike(id: string, config?: RequestConfig) {
        const url = `/api/v1/posts/unlike/${id}`;
        return await api.post(url, {}, config);
    }
}
