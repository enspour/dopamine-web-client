import { FC, ReactNode, memo } from "react";

import SearchModal from "@components/modals/SearchModal/SearchModal";
import Header from "./Header/Header";

import styles from "./GuestLayout.module.scss";

interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout: FC<GuestLayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.content}>{children}</div>

            <SearchModal />
        </main>
    );
};

export default memo(GuestLayout);
