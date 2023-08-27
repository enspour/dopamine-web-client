import { FileMetadata } from "@features/files";
import { Post } from "@features/posts";

export interface PostsCreateDto {
    text?: string;
    files?: FileMetadata[];
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

export interface PostsUpdateFilesDto {
    id: string;
    files: FileMetadata[];
}
