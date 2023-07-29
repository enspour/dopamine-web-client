import { CSSProperties, FC, memo } from "react";

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import { Post } from "@interfaces";

import styles from "./PostCard.module.scss";

interface PostCardProps {
    post: Post;
    palette?: ThemePalette;
}

const PostCard: FC<PostCardProps> = ({ post, palette = "primary" }) => {
    return (
        <div className={styles.post} style={getBackgroundStyles(palette)}>
            <PostHeader post={post} palette={palette} />

            <div className={styles.post__text} style={getColorStyles(palette)}>
                {post.text}
            </div>

            <PostFooter post={post} palette={palette} />
        </div>
    );
};

const getBackgroundStyles = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
});

const getColorStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(PostCard);
