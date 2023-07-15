import { axios } from "@utils";

import {
    PostsCreateDto,
    PostsGetOneResponseDto,
    PostsUpdateImagesDto,
    PostsUpdateTextDto,
} from "@dto";

export class PostsApi {
    static async getOne(id: string) {
        const url = `/api/v1/posts/${id}`;
        return await axios.get<PostsGetOneResponseDto>(url);
    }

    static async create(data: PostsCreateDto) {
        return await axios.post<PostsGetOneResponseDto>("/api/v1/posts", data);
    }

    static async remove(id: string) {
        const url = `/api/v1/posts/${id}`;
        return await axios.delete(url);
    }

    static async updateText(data: PostsUpdateTextDto) {
        const url = "/api/v1/posts/text";
        return await axios.put(url, data);
    }

    static async updateImages(data: PostsUpdateImagesDto) {
        const url = "/api/v1/posts/text";
        return await axios.put(url, data);
    }

    static async like(id: string) {
        const url = `/api/v1/posts/like/${id}`;
        return await axios.post(url);
    }

    static async unlike(id: string) {
        const url = `/api/v1/posts/unlike/${id}`;
        return await axios.post(url);
    }
}
