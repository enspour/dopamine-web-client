"use client";

import { FC, memo } from "react";

import { PostCardList } from "@features/posts";

import { useFollowingIds, useUser } from "@features/users/client";

import styles from "./Posts.module.scss";

const Posts: FC = () => {
    const { user } = useUser();
    const { followingIds } = useFollowingIds();

    const userIds = [user.id, ...followingIds];

    return (
        <div className={styles.section}>
            <div className={styles.section__header}>
                <div>Posts</div>
            </div>

            <PostCardList
                userIds={userIds}
                emptyListMessage="Posts not found"
            />
        </div>
    );
};

export default memo(Posts);
