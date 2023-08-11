"use client";

import { FC, memo, useEffect } from "react";

import FollowingsListEmpty from "./FollowingsListEmpty";
import FollowingsSkeleton from "./FollowingsListSkeleton";

import { FollowingCard } from "@features/users";
import { useFollowings } from "@features/users/client";

import styles from "./FollowingsList.module.scss";

interface FollowingsListProps {
    userId: number;
    emptyListMessage: string;
}

const FollowingsList: FC<FollowingsListProps> = ({
    userId,
    emptyListMessage,
}) => {
    const { followings, loading, update } = useFollowings(userId);

    useEffect(() => {
        update();
    }, []);

    if (loading === "loading") {
        return <FollowingsSkeleton length={8} />;
    }

    if (loading === "idle" && followings.length === 0) {
        return <FollowingsListEmpty message={emptyListMessage} />;
    }

    return (
        <div className={styles.followings}>
            {followings.map((following) => (
                <FollowingCard key={following.user.id} following={following} />
            ))}
        </div>
    );
};

export default memo(FollowingsList);
