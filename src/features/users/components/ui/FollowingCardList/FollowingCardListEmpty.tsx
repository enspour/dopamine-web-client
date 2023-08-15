import { FC, memo } from "react";

import styles from "./FollowingCardList.module.scss";

interface FollowingCardListEmptyProps {
    message: string;
}

const FollowingCardListEmpty: FC<FollowingCardListEmptyProps> = ({
    message,
}) => {
    return <div className={styles.followings__empty}>{message}</div>;
};

export default memo(FollowingCardListEmpty);
