import { memo } from "react";

import SkeletonCircle from "../Skeleton/SkeletonCircle";

const FollowingCardSkeleton = () => {
    return <SkeletonCircle style={{ diameter: "5rem" }} />;
};

export default memo(FollowingCardSkeleton);
