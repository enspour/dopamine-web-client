import { Subs } from "./Subs.interface";

export type Following = Omit<Subs, "follower">;
