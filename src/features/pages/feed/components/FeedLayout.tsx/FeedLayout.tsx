import { FC, ReactNode, memo } from "react";

import QuickPanel from "../sections/QuickPanel/QuickPanel";
import Suggestions from "../sections/Suggestions/Suggestions";

import styles from "./FeedLayout.module.scss";

interface FeedLayoutProps {
    children: ReactNode;
}

const FeedLayout: FC<FeedLayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <QuickPanel />

            <div>{children}</div>

            <Suggestions />
        </div>
    );
};

export default memo(FeedLayout);
