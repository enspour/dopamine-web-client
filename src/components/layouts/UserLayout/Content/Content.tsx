import { FC, ReactNode, memo } from "react";

import styles from "./Content.module.scss";

interface ContentProps {
    content: ReactNode;
}

const Content: FC<ContentProps> = ({ content }) => {
    return <div className={styles.content}>{content}</div>;
};

export default memo(Content);
