"use client";

import { memo, useState } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import SearchModalFilters from "./SearchModalFilters";

import { useSearchModal } from "@features/modals/client";

import BackIcon from "@features/modals/assets/icons/general/back.svg";
import ClearIcon from "@features/modals/assets/icons/general/clear.svg";

import styles from "./SearchModal.module.scss";

const SearchModalInput = () => {
    const [text, setText] = useState("");

    const { close } = useSearchModal();

    const clear = () => setText("");

    return (
        <div className={styles.search__input}>
            <Icon svg={BackIcon} onClick={close} />

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
