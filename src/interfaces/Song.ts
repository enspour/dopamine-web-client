import { Genre } from "./Genre";
import { User } from "./User";

export interface Song {
    id: number;
    name: string;
    link: string;
    owner: Omit<User, "email" | "status">;
    genre: Genre;
    image: string;
    url: string;
    time: number;
    createdAt: number;
    modifiedAt: number;
}
