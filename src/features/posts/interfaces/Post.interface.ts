import { User } from "@features/users";

export interface Post {
    id: string;
    text: string;
    files: string[];
    owner: User;
    comments: Post[];
    likes: number[];
    createdAt: Date;
    modifiedAt: Date;
}
