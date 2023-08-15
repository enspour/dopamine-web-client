"use client";

import { FC, memo, useEffect } from "react";

import FollowingCardListEmpty from "./FollowingCardListEmpty";
import FollowingCardListSkeleton from "./FollowingCardListSkeleton";

import { FollowingCard } from "@features/users";
import { useFollowings } from "@features/users/client";

import styles from "./FollowingCardList.module.scss";

interface FollowingCardListProps {
    userId: number;
    emptyListMessage: string;
}

const FollowingCardList: FC<FollowingCardListProps> = ({
    userId,
    emptyListMessage,
}) => {
    const { followings, loading, update } = useFollowings(userId);

    useEffect(() => {
        update();
    }, []);

    if (loading === "loading") {
        return <FollowingCardListSkeleton length={8} />;
    }

    if (loading === "idle" && followings.length === 0) {
        return <FollowingCardListEmpty message={emptyListMessage} />;
    }

    return (
        <div className={styles.followings}>
            {followings.map((following) => (
                <FollowingCard key={following.user.id} following={following} />
            ))}
        </div>
    );
};

export default memo(FollowingCardList);
