import { FC } from "react";

import FollowingCardSkeleton from "@components/ui/skeletons/FollowingCardSkeleton/FollowingCardSkeleton";

import { Following } from "@interfaces";

interface FollowingCardProps {
    following: Following;
}

const FollowingCard: FC<FollowingCardProps> = ({ following }) => {
    return <FollowingCardSkeleton />;
};

export default FollowingCard;
