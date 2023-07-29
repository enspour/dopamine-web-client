import { FC, memo } from "react";

import Icon from "../Icon/Icon";

import { type ThemePalette } from "@features/theme";

import { Post } from "@interfaces";

import CommentsIcon from "@assets/icons/post-card/comments.svg";

import styles from "./PostCard.module.scss";

interface PostFooterCommentsProps {
    post: Post;
    palette: ThemePalette;
}

const PostFooterComments: FC<PostFooterCommentsProps> = ({ post, palette }) => {
    return (
        <div className={styles.post__footer__control}>
            <Icon svg={CommentsIcon} palette={palette} />
            <div>{post.comments.length}</div>
        </div>
    );
};

export default memo(PostFooterComments);
