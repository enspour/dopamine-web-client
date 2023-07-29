import { Following } from "./Following.interface";

export type Followers = Omit<Following, "user">[];
