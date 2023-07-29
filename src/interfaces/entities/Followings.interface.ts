import { Following } from "./Following.interface";

export type Followings = Omit<Following, "follower">[];
