import { CSSProperties, FC } from "react";

import PostCardSkeletonHeader from "./PostCardSkeletonHeader";
import PostCardSkeletonText from "./PostCardSkeletonText";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./PostCardSkeleton.module.scss";

interface PostCardSkeletonProps {
    palette?: ThemePalette;
}

const PostCardSkeleton: FC<PostCardSkeletonProps> = ({
    palette = "primary",
}) => {
    return (
        <div className={styles.post} style={getStyles(palette)}>
            <PostCardSkeletonHeader />
            <PostCardSkeletonText />
        </div>
    );
};

const getStyles = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
});

export default PostCardSkeleton;
