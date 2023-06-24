import { useState } from "react";

import Pagination from "@components/ui/navigation/Pagination/Pagination";

import styles from "./SearchModal.module.scss";

const SearchModalPagination = () => {
    const total = 100;

    const [page, setPage] = useState(1);

    return (
        <div className={styles.search__pagination}>
            <Pagination total={total} page={page} setPage={setPage} />
        </div>
    );
};

export default SearchModalPagination;
