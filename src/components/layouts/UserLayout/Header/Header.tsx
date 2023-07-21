import { memo } from "react";

import HeaderCenter from "./HeaderCenter";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearchControl from "./HeaderSearchControl";
import HeaderUser from "./HeaderUser";

import { HeaderNavigationId } from "@interfaces";

import styles from "./Header.module.scss";

export interface Navigation {
    id: HeaderNavigationId;
    href: string;
}

const navigation: Navigation[] = [
    {
        id: "browse",
        href: "/browse",
    },
    {
        id: "store",
        href: "/store",
    },
    {
        id: "feed",
        href: "/feed",
    },
];

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <HeaderNavigation navigation={navigation} />

                <HeaderCenter />

                <div className={styles.header__menu}>
                    <HeaderSearchControl />
                    <HeaderUser />
                </div>
            </header>
        </div>
    );
};

export default memo(Header);
