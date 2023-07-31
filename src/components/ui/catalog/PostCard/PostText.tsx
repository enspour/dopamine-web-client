import { CSSProperties, FC } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import { Post } from "@interfaces";

import styles from "./PostCard.module.scss";

interface PostTextProps {
    post: Post;
    palette: ThemePalette;
}

const PostText: FC<PostTextProps> = ({ post, palette }) => {
    return (
        <div className={styles.post__text} style={getColorStyles(palette)}>
            {post.text}
        </div>
    );
};

const getColorStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default PostText;
