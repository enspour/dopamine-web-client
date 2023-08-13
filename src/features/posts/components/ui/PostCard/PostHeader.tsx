"use client";

import { useRouter } from "next/navigation";
import { CSSProperties, FC, memo, MouseEvent } from "react";

import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

import PostHeaderMore from "./PostHeaderMore";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import { type Post } from "@features/posts";

import styles from "./PostCard.module.scss";

interface PostHeaderProps {
    post: Post;
    palette: ThemePalette;
}

const PostHeader: FC<PostHeaderProps> = ({ post, palette }) => {
    const router = useRouter();

    const openOwnerByName = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        router.push(`/accounts/@${post.owner.name}`);
    };

    return (
        <div className={styles.post__header} style={getColorStyles(palette)}>
            <div className={styles.post__header__container}>
                <div className={styles.post__header__user__avatar}>
                    <SkeletonCircle style={{ diameter: "5rem" }} />
                </div>

                <div>
                    <div className={styles.post__header__user__nickname}>
                        {post.owner.nickname}
                    </div>

                    <div
                        className={styles.post__header__user__name}
                        onClick={openOwnerByName}
                        style={getLinkStyles(palette)}
                    >
                        @{post.owner.name}
                    </div>
                </div>
            </div>

            <PostHeaderMore post={post} />
        </div>
    );
};

const getColorStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

const getLinkStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("link", palette),
});

export default memo(PostHeader);
