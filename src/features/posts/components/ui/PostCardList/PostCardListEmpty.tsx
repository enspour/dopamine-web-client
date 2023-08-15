import { FC, memo } from "react";

import styles from "./PostCardList.module.scss";

interface PostCardListProps {
    message: string;
}

const PostCardListEmpty: FC<PostCardListProps> = ({ message }) => {
    return <div className={styles.posts__empty}>{message}</div>;
};

export default memo(PostCardListEmpty);
