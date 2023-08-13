import { FC } from "react";

import ContextMenu from "@components/ui/catalog/ContextMenu/ContextMenu";
import Icon from "@components/ui/catalog/Icon/Icon";

import PostHeaderMoreMenu from "./PostHeaderMoreMenu";

import { Post } from "@features/posts";

import MoreIcon from "@assets/icons/post-card/more.svg";

import styles from "./PostCard.module.scss";

interface PostHeaderMoreProps {
    post: Post;
}

const PostHeaderMore: FC<PostHeaderMoreProps> = ({ post }) => {
    return (
        <ContextMenu style={{ gap: "1rem" }}>
            <div className={styles.post__header__control}>
                <Icon svg={MoreIcon} />
            </div>

            <PostHeaderMoreMenu post={post} />
        </ContextMenu>
    );
};

export default PostHeaderMore;
