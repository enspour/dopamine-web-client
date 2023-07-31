import { Subs } from "./Subs.interface";

export type Follower = Omit<Subs, "user">;
