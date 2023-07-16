import { ReactNode } from "react";

import UserLayout from "@components/layouts/UserLayout/UserLayout";
import SearchModal from "@components/modals/SearchModal/SearchModal";
import SettingsModal from "@components/modals/SettingsModal/SettingsModal";
import Header from "./Header/Header";

import { useRequestConfig } from "@hooks/server";

import { UsersApi } from "@api";

import { typedMemo } from "@utils";

import styles from "./MainLayout.module.scss";

const getUser = async () => {
    const config = useRequestConfig();
    const response = await UsersApi.me(config);

    if (response.statusCode === 200) {
        return response.data.user;
    }

    return null;
};

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
    const user = await getUser();

    return (
        <UserLayout user={user}>
            <main className={styles.main}>
                <Header />

                <div className={styles.content}>{children}</div>

                <SearchModal />
                <SettingsModal />
            </main>
        </UserLayout>
    );
};

export default typedMemo(MainLayout);
