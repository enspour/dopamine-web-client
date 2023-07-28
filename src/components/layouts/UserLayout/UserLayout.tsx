import { FC, ReactNode, memo } from "react";

import Content from "./Content/Content";
import Header from "./Header/Header";

import styles from "./UserLayout.module.scss";

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            <Header />
            <Content content={children} />
        </main>
    );
};

export default memo(UserLayout);
