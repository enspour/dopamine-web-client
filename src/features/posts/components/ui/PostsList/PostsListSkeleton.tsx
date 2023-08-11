import { FC, memo } from "react";

import { PostCardSkeleton } from "@features/posts";

import styles from "./PostsList.module.scss";

interface PostsSkeletonProps {
    length: number;
}

const PostsListSkeleton: FC<PostsSkeletonProps> = ({ length }) => {
    const posts = Array.from({ length }, (_, i) => i);

    return (
        <div className={styles.posts}>
            {posts.map((key) => (
                <PostCardSkeleton key={key} />
            ))}
        </div>
    );
};

export default memo(PostsListSkeleton);
