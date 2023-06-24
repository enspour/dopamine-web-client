import { memo } from "react";

import styles from "./SearchModal.module.scss";

const SearchModalContent = () => {
    return <div className={styles.search__content}></div>;
};

export default memo(SearchModalContent);
