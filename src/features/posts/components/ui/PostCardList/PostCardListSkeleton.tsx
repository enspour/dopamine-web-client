import { FC, memo } from "react";

import { PostCardSkeleton } from "@features/posts";

import styles from "./PostCardList.module.scss";

interface PostCardListSkeletonProps {
    length: number;
}

const PostCardListSkeleton: FC<PostCardListSkeletonProps> = ({ length }) => {
    const posts = Array.from({ length }, (_, i) => i);

    return (
        <div className={styles.posts}>
            {posts.map((key) => (
                <PostCardSkeleton key={key} />
            ))}
        </div>
    );
};

export default memo(PostCardListSkeleton);
