import { Following } from "@interfaces";

export interface FollowingsGetAllResponseDto {
    followings: Omit<Following, "follower">[];
}
