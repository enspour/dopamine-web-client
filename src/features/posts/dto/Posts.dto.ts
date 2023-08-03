import { Post } from "@features/posts";

export interface PostsCreateDto {
    text?: string;
    images?: string[];
}

export interface PostsGetOneResponseDto {
    post: Post;
}

export interface PostsGetManyResponseDto {
    posts: Post[];
}

export interface PostsUpdateTextDto {
    id: string;
    text: string;
}

export interface PostsUpdateImagesDto {
    id: string;
    images: string[];
}
