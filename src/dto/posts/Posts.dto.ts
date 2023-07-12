import { Post } from "@/interfaces/Post.interface";

export interface PostsCreateDto {
    text?: string;
    images?: string[];
}

export interface PostsGetOneResponseDto {
    post: Post;
}

export interface PostsUpdateTextDto {
    id: string;
    text: string;
}

export interface PostsUpdateImagesDto {
    id: string;
    images: string[];
}
