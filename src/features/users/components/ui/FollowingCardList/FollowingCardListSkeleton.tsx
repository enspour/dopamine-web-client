import { FC, memo } from "react";

import { FollowingCardSkeleton } from "@features/users";

import styles from "./FollowingCardList.module.scss";

interface FollowingCardListSkeletonProps {
    length: number;
}

const FollowingCardListSkeleton: FC<FollowingCardListSkeletonProps> = ({
    length,
}) => {
    const followings = Array.from({ length }, (_, i) => i);

    return (
        <div className={styles.followings}>
            {followings.map((following) => (
                <FollowingCardSkeleton key={following} />
            ))}
        </div>
    );
};

export default memo(FollowingCardListSkeleton);
