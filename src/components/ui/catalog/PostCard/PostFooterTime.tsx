import { FC, memo } from "react";

import { useAppSelector } from "@redux/hooks";
import { selectLocate } from "@redux/slices/internationalization.slice";

import { Post } from "@interfaces";

import styles from "./PostCard.module.scss";

interface PostFooterTimeProps {
    post: Post;
}

const PostFooterTime: FC<PostFooterTimeProps> = ({ post }) => {
    const locate = useAppSelector(selectLocate);

    return (
        <div className={styles.post__footer__time}>
            {new Date(post.createdAt).toLocaleString(locate)}
        </div>
    );
};

export default memo(PostFooterTime);
