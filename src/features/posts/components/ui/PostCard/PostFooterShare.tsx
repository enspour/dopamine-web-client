import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { type ThemePalette } from "@features/theme";

import { Post } from "@features/posts";

import ShareIcon from "@assets/icons/post-card/share.svg";

import styles from "./PostCard.module.scss";

interface PostFooterShareProps {
    post: Post;
    palette: ThemePalette;
}

const PostFooterShare: FC<PostFooterShareProps> = ({ post, palette }) => {
    return (
        <div className={styles.post__footer__control}>
            <Icon svg={ShareIcon} palette={palette} />
        </div>
    );
};

export default memo(PostFooterShare);
