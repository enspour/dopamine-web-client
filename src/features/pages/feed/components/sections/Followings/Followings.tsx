"use client";

import { FC, memo } from "react";

import { FollowingCardList } from "@features/users";

import { useUser } from "@features/users/client";

import styles from "./Followings.module.scss";

const Followings: FC = () => {
    const { user } = useUser();

    return (
        <div className={styles.section}>
            <div className={styles.section__header}>
                <div>Followings</div>
                <div>See all</div>
            </div>

            <FollowingCardList
                userId={user.id}
                emptyListMessage="Followings not found"
            />
        </div>
    );
};

export default memo(Followings);
