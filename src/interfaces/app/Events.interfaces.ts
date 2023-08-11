import { Post } from "@features/posts";

export type EventName = "posts/user-create-one";

export interface Events extends Record<EventName, any[]> {
    "posts/user-create-one": [Post];
}
