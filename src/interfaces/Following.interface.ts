import { User } from "./User.interface";

export interface Following {
    user: User;
    follower: User;
    created_at: Date;
    modified_at: Date;
}
