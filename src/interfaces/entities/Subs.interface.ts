import { User } from "@features/users";

export interface Subs {
    user: User;
    follower: User;
    createdAt: Date;
    modifiedAt: Date;
}
