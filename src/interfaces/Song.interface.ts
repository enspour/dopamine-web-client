import { Genre } from "./Genre.interface";
import { User } from "./User.interface";

export interface Song {
    id: number;
    name: string;
    link: string;
    owner: User;
    genre: Genre;
    image: string;
    url: string;
    time: number;
    created_at: Date;
    modified_at: Date;
}
