import { User } from "./User.interface";

export interface Following {
    user: User;
    follower: User;
    createdAt: Date;
    modifiedAt: Date;
}
