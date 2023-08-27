import { FC, memo } from "react";

import Followings from "../sections/Followings/Followings";
import Posts from "../sections/Posts/Posts";

import styles from "./Feed.module.scss";

const Feed: FC = () => {
    return (
        <div className={styles.feed}>
            <Followings />
            <Posts />
        </div>
    );
};

export default memo(Feed);
