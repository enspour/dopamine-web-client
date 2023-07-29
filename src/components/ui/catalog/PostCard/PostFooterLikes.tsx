"use client";

import { FC, MouseEvent, useState } from "react";

import Icon from "../Icon/Icon";

import { useRequest } from "@hooks/client";

import { type ThemePalette } from "@features/theme";

import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@redux/slices/user.slice";

import { PostsApi } from "@api";

import { Post } from "@interfaces";

import LikeIcon from "@assets/icons/post-card/like.svg";
import UnlikeIcon from "@assets/icons/post-card/unlike.svg";

import styles from "./PostCard.module.scss";

interface PostFooterLikesProps {
    post: Post;
    palette: ThemePalette;
}

const PostFooterLikes: FC<PostFooterLikesProps> = ({ post, palette }) => {
    const user = useAppSelector(selectUser);

    const [isLiked, setIsLiked] = useState(post.likes.includes(user.id));

    const likeRequest = useRequest(PostsApi.like);
    const unlikeRequest = useRequest(PostsApi.unlike);

    const toggle = async (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        let response;

        if (isLiked) {
            response = await unlikeRequest.run(post.id);
        } else {
            response = await likeRequest.run(post.id);
        }

        if (response.statusCode === 200) {
            setIsLiked((prev) => !prev);
        }
    };

    return (
        <div className={styles.post__footer__control}>
            <Icon
                svg={isLiked ? UnlikeIcon : LikeIcon}
                onClick={toggle}
                palette={palette}
            />
            <div>{post.likes.length}</div>
        </div>
    );
};

export default PostFooterLikes;
