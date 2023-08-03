import { memo } from "react";

import SkeletonBox from "@components/ui/catalog/Skeleton/SkeletonBox";
import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

import styles from "./PostCardSkeleton.module.scss";

const PostCardSkeletonHeader = () => {
    return (
        <div className={styles.post__header}>
            <SkeletonCircle style={{ diameter: "5rem" }} />

            <div className={styles.post__header__info}>
                <SkeletonBox
                    style={{
                        height: "1.4rem",
                        width: "10rem",
                        borderRadius: "0.5rem",
                    }}
                />

                <SkeletonBox
                    style={{
                        height: "1.2rem",
                        width: "15rem",
                        borderRadius: "0.5rem",
                    }}
                />
            </div>
        </div>
    );
};

export default memo(PostCardSkeletonHeader);
