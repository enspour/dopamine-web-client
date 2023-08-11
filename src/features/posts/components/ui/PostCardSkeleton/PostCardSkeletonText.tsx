import { FC, memo } from "react";

import SkeletonBox from "@components/ui/catalog/Skeleton/SkeletonBox";

import styles from "./PostCardSkeleton.module.scss";

const PostCardSkeletonText: FC = () => {
    return (
        <div className={styles.post__text}>
            <SkeletonBox
                style={{
                    height: "1.4rem",
                    width: "96%",
                    borderRadius: "0.5rem",
                }}
            />

            <SkeletonBox
                style={{
                    height: "1.4rem",
                    width: "84%",
                    borderRadius: "0.5rem",
                }}
            />

            <SkeletonBox
                style={{
                    height: "1.4rem",
                    width: "92%",
                    borderRadius: "0.5rem",
                }}
            />

            <SkeletonBox
                style={{
                    height: "1.4rem",
                    width: "86%",
                    borderRadius: "0.5rem",
                }}
            />

            <SkeletonBox
                style={{
                    height: "1.4rem",
                    width: "90%",
                    borderRadius: "0.5rem",
                }}
            />

            <SkeletonBox
                style={{
                    height: "1.4rem",
                    width: "83%",
                    borderRadius: "0.5rem",
                }}
            />
        </div>
    );
};

export default memo(PostCardSkeletonText);
