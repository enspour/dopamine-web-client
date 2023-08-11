import { FC, memo } from "react";

import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

const FollowingCardSkeleton: FC = () => {
    return <SkeletonCircle style={{ diameter: "5rem" }} />;
};

export default memo(FollowingCardSkeleton);
