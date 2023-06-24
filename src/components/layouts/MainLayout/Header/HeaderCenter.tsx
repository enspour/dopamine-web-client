import { memo } from "react";

import styles from "./Header.module.scss";

const HeaderCenter = () => {
    return (
        <div className={styles.header__center}>
            <div className={styles.header__center__title}>Dopamine</div>
        </div>
    );
};

export default memo(HeaderCenter);
