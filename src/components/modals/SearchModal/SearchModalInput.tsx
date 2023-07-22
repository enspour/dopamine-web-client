"use client";

import { memo, useState } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import SearchModalFilters from "./SearchModalFilters";

import ClearIcon from "@assets/icons/search/clear.svg";
import SearchIcon from "@assets/icons/search/search.svg";

import styles from "./SearchModal.module.scss";

const SearchModalInput = () => {
    const [text, setText] = useState("");

    const clear = () => setText("");

    return (
        <div className={styles.search__input}>
            <Icon svg={SearchIcon} />

            <input
                type="text"
                placeholder="Search..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Icon svg={ClearIcon} onClick={clear} />

            <SearchModalFilters />
        </div>
    );
};

export default memo(SearchModalInput);
