import { ReactNode, memo } from "react";

import Header from "./Header/Header";

import SearchModal from "@components/modals/SearchModal/SearchModal";
import SettingsModal from "@components/modals/SettingsModal/SettingsModal";

import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.content}>{children}</div>

            <SearchModal />
            <SettingsModal />
        </main>
    );
};

export default memo(MainLayout);
