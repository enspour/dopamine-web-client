import { FC, memo } from "react";

import { FollowingCardSkeleton } from "@features/users";

import styles from "./FollowingsList.module.scss";

interface FollowingCardSkeletonProps {
    length: number;
}

const FollowingsSkeleton: FC<FollowingCardSkeletonProps> = ({ length }) => {
    const followings = Array.from({ length }, (_, i) => i);

    return (
        <div className={styles.followings}>
            {followings.map((following) => (
                <FollowingCardSkeleton key={following} />
            ))}
        </div>
    );
};

export default memo(FollowingsSkeleton);
