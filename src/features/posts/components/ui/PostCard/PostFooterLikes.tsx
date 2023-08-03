"use client";

import { FC, MouseEvent, memo, useState } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useRequest } from "@hooks/client";

import { type ThemePalette } from "@features/theme";

import { useUser } from "@features/users/client";

import { PostsApi } from "@features/posts/api";

import { Post } from "@features/posts";

import LikeIcon from "@assets/icons/post-card/like.svg";
import UnlikeIcon from "@assets/icons/post-card/unlike.svg";

import styles from "./PostCard.module.scss";

interface PostFooterLikesProps {
    post: Post;
    palette: ThemePalette;
}

const PostFooterLikes: FC<PostFooterLikesProps> = ({ post, palette }) => {
    const { user } = useUser();

    const [likes, setLikes] = useState(post.likes.length);

    const [isLiked, setIsLiked] = useState(post.likes.includes(user.id)); // TODO

    const likeRequest = useRequest(PostsApi.like);
    const unlikeRequest = useRequest(PostsApi.unlike);

    const like = async (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        const response = await likeRequest.run(post.id);
        if (response.statusCode === 200) {
            setLikes((prev) => prev + 1);
            setIsLiked(true);
        }
    };

    const unlike = async (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        const response = await unlikeRequest.run(post.id);
        if (response.statusCode === 200) {
            setLikes((prev) => prev - 1);
            setIsLiked(false);
        }
    };

    return (
        <div
            className={styles.post__footer__control}
            onClick={isLiked ? unlike : like}
        >
            <Icon svg={isLiked ? LikeIcon : UnlikeIcon} palette={palette} />
            <div>{likes}</div>
        </div>
    );
};

export default memo(PostFooterLikes);
