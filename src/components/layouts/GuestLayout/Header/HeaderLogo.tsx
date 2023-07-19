import { memo } from "react";

import styles from "./Header.module.scss";

const HeaderLogo = () => {
    return <div className={styles.header__logo}>Dopamine</div>;
};

export default memo(HeaderLogo);
