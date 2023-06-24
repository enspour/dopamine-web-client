import { memo } from "react";

import HeaderCenter from "./HeaderCenter";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearchControl from "./HeaderSearchControl";
import HeaderUser from "./HeaderUser";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <HeaderNavigation />

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
