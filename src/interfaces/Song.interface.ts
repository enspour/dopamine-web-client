import Genre from "./Genre.interface";
import User from "./User.interface";

export default interface Song {
    id: number;
    name: string;
    link: string;
    owner: Omit<User, "status" | "emails" | "security">;
    genre: Genre;
    image: string;
    url: string;
    time: number;
    created_at: Date;
    modified_at: Date;
}
