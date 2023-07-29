"use client";

import { CSSProperties, FC, memo } from "react";

import PostFooterComments from "./PostFooterComments";
import PostFooterLikes from "./PostFooterLikes";
import PostFooterShare from "./PostFooterShare";
import PostFooterTime from "./PostFooterTime";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import { Post } from "@interfaces";

import styles from "./PostCard.module.scss";

interface PostFooterProps {
    post: Post;
    palette: ThemePalette;
}

const PostFooter: FC<PostFooterProps> = ({ post, palette }) => {
    return (
        <div className={styles.post__footer} style={getColorStyles(palette)}>
            <div className={styles.post__footer__controls}>
                <PostFooterLikes post={post} palette={palette} />
                <PostFooterComments post={post} palette={palette} />
                <PostFooterShare post={post} palette={palette} />
            </div>

            <PostFooterTime post={post} />
        </div>
    );
};

const getColorStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(PostFooter);
