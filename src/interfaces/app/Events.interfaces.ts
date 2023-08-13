import { type Post } from "@features/posts";

export interface Events {
    "posts/user-create-one": [Post];
    "posts/user-remove-one": [Post];
}

export type EventName = keyof Events;
