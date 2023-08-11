import { FC, memo } from "react";

import styles from "./FollowingsList.module.scss";

interface FollowingsListEmptyProps {
    message: string;
}

const FollowingsListEmpty: FC<FollowingsListEmptyProps> = ({ message }) => {
    return <div className={styles.followings__empty}>{message}</div>;
};

export default memo(FollowingsListEmpty);
