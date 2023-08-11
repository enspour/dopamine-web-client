import { FC, memo } from "react";

import FollowingCardSkeleton from "../FollowingCardSkeleton/FollowingCardSkeleton";

import { Following } from "@features/users";

interface FollowingCardProps {
    following: Following;
}

const FollowingCard: FC<FollowingCardProps> = ({ following }) => {
    return <FollowingCardSkeleton />;
};

export default memo(FollowingCard);
