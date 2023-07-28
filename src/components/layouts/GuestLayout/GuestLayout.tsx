import { FC, ReactNode, memo } from "react";

import Content from "./Content/Content";
import Header from "./Header/Header";

import styles from "./GuestLayout.module.scss";

interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout: FC<GuestLayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            <Header />
            <Content content={children} />
        </main>
    );
};

export default memo(GuestLayout);
