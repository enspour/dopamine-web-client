import { memo } from "react";

import MediaQuery from "@components/others/MediaQuery";

import HeaderCenter from "./HeaderCenter";
import HeaderHamburger from "./HeaderHamburger";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearchControl from "./HeaderSearchControl";
import HeaderUser from "./HeaderUser";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <MediaQuery media="(min-width: 768px)">
                    <HeaderNavigation />
                    <HeaderHamburger />
                </MediaQuery>

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
