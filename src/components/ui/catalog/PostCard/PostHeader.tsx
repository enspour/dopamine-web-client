"use client";

import { useRouter } from "next/navigation";
import { CSSProperties, FC, MouseEvent } from "react";

import Icon from "../Icon/Icon";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import MoreIcon from "@assets/icons/post-card/more.svg";

import { Post } from "@interfaces";

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
            <div className={styles.post__header__wrapper}>
                <div className={styles.post__header__user__avatar} />

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

            <Icon svg={MoreIcon} />
        </div>
    );
};

const getColorStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

const getLinkStyles = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("link", palette),
});

export default PostHeader;
