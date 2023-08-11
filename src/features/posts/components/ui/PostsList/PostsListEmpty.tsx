import { FC, memo } from "react";

import styles from "./PostsList.module.scss";

interface PostsListEmptyProps {
    message: string;
}

const PostsListEmpty: FC<PostsListEmptyProps> = ({ message }) => {
    return <div className={styles.posts__empty}>{message}</div>;
};

export default memo(PostsListEmpty);
