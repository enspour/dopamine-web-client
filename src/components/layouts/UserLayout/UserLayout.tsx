import { FC, ReactNode, memo } from "react";

import SearchModal from "@components/modals/SearchModal/SearchModal";
import SettingsModal from "@components/modals/SettingsModal/SettingsModal";
import Header from "./Header/Header";

import styles from "./UserLayout.module.scss";

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.content}>{children}</div>

            <SearchModal />
            <SettingsModal />
        </main>
    );
};

export default memo(UserLayout);
