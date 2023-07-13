import { Following } from "@interfaces";

export interface FollowersGetAllResponseDto {
    followers: Omit<Following, "user">[];
}
