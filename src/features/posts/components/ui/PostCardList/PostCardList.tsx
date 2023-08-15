"use client";

import { FC, memo, useEffect } from "react";

import PostCardListEmpty from "./PostCardListEmpty";
import PostCardListSkeleton from "./PostCardListSkeleton";

import { PostCard } from "@features/posts";
import { usePosts } from "@features/posts/client";

import styles from "./PostCardList.module.scss";

interface PostCardListProps {
    userIds: number[];
    emptyListMessage: string;
}

const PostCardList: FC<PostCardListProps> = ({ userIds, emptyListMessage }) => {
    const { posts, loading, uploadMore } = usePosts(...userIds);

    useEffect(() => {
        uploadMore();
    }, []);

    if (loading === "loading") {
        return <PostCardListSkeleton length={2} />;
    }

    if (loading === "idle" && posts.length === 0) {
        return <PostCardListEmpty message={emptyListMessage} />;
    }

    return (
        <div className={styles.posts}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default memo(PostCardList);
