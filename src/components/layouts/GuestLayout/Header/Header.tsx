import { memo } from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderSearchControl from "./HeaderSearchControl";

import styles from "../../UserLayout/Header/Header.module.scss";

const Header = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <HeaderLogo />
                <HeaderSearchControl />
            </header>
        </div>
    );
};

export default memo(Header);
