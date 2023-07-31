import { User } from "./User.interface";

export interface Subs {
    user: User;
    follower: User;
    createdAt: Date;
    modifiedAt: Date;
}
