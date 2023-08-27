import { FileMetadata } from "@features/files";
import { User } from "@features/users";

export interface Post {
    id: string;
    text: string;
    files: FileMetadata[];
    owner: User;
    comments: Post[];
    likes: number[];
    createdAt: Date;
    modifiedAt: Date;
}
