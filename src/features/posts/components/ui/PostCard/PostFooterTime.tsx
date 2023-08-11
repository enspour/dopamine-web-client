import { FC, memo } from "react";

import { Post } from "@features/posts";

import FormatDateFromNow from "@components/others/FormatDateFromNow";

import styles from "./PostCard.module.scss";

interface PostFooterTimeProps {
    post: Post;
}

const PostFooterTime: FC<PostFooterTimeProps> = ({ post }) => {
    return (
        <div className={styles.post__footer__time}>
            <FormatDateFromNow date={post.createdAt} />
        </div>
    );
};

export default memo(PostFooterTime);
