import { CSSProperties, FC, memo } from "react";

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostText from "./PostText";

import { FileGallery } from "@features/files";

import { Post } from "@features/posts";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./PostCard.module.scss";

interface PostCardProps {
    post: Post;
    palette?: ThemePalette;
}

const PostCard: FC<PostCardProps> = ({ post, palette = "primary" }) => {
    return (
        <div className={styles.post} style={getBackgroundStyles(palette)}>
            <PostHeader post={post} palette={palette} />

            {!!post.files.length && <FileGallery files={post.files} />}

            <PostText post={post} palette={palette} />

            <PostFooter post={post} palette={palette} />
        </div>
    );
};

const getBackgroundStyles = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
});

export default memo(PostCard);
