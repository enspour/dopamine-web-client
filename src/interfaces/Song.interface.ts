import { User } from "@features/users";
import { Genre } from "./Genre.interface";

export interface Song {
    id: number;
    name: string;
    link: string;
    owner: User;
    genre: Genre;
    image: string;
    url: string;
    time: number;
    createdAt: Date;
    modifiedAt: Date;
}
