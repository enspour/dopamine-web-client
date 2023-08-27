import { FC, memo } from "react";

import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

interface UserAvatarProps {
    diameter: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ diameter }) => {
    return <SkeletonCircle style={{ diameter: diameter }} />;
};

export default memo(UserAvatar);
