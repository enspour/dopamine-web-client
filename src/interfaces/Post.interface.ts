import { User } from "./User.interface";

export interface Post {
    id: string;
    text: string;
    images: string[];
    owner: User;
    comments: Post[];
    likes: number[];
    createdAt: Date;
    modifiedAt: Date;
}
