import { memo } from "react";

import HeaderCenter from "./HeaderCenter";
import HeaderNavigation, { Navigation } from "./HeaderNavigation";
import HeaderSearchControl from "./HeaderSearchControl";
import HeaderUser from "./HeaderUser";

import styles from "./Header.module.scss";

const navigation: Navigation[] = [
    {
        id: "browse",
        href: "/browse",
        text: "Browse",
    },
    {
        id: "store",
        href: "/store",
        text: "Store",
    },
    {
        id: "feed",
        href: "/feed",
        text: "Feed",
    },
];

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <HeaderNavigation navigation={navigation} />

                <HeaderCenter />

                <div className={styles.header__right}>
                    <HeaderSearchControl />
                    <HeaderUser />
                </div>
            </header>
        </div>
    );
};

export default memo(Header);
