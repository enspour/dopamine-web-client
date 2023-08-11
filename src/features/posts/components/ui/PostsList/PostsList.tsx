"use client";

import { FC, memo, useEffect } from "react";

import PostsListEmpty from "./PostsListEmpty";
import PostsListSkeleton from "./PostsListSkeleton";

import { PostCard } from "@features/posts";
import { usePosts } from "@features/posts/client";

import styles from "./PostsList.module.scss";

interface PostsListProps {
    userIds: number[];
    emptyListMessage: string;
}

const PostsList: FC<PostsListProps> = ({ userIds, emptyListMessage }) => {
    const { posts, loading, uploadMore } = usePosts(userIds);

    useEffect(() => {
        uploadMore();
    }, []);

    if (loading === "loading") {
        return <PostsListSkeleton length={2} />;
    }

    if (loading === "idle" && posts.length === 0) {
        return <PostsListEmpty message={emptyListMessage} />;
    }

    return (
        <div className={styles.posts}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default memo(PostsList);
