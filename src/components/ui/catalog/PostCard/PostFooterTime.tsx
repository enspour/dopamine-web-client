import { FC, memo } from "react";

import { Post } from "@interfaces";

import { useLocate } from "@features/inter/client";

import styles from "./PostCard.module.scss";

interface PostFooterTimeProps {
    post: Post;
}

const PostFooterTime: FC<PostFooterTimeProps> = ({ post }) => {
    const [locate] = useLocate();

    return (
        <div className={styles.post__footer__time}>
            {new Date(post.createdAt).toLocaleString(locate)}
        </div>
    );
};

export default memo(PostFooterTime);
