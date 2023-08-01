"use client";

import { memo, useState } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import SearchModalFilters from "./SearchModalFilters";

import { closeSearchModal } from "@features/modals/redux/slices/modals.slice";
import { useAppDispatch } from "@redux/hooks";

import BackIcon from "@features/modals/assets/icons/back.svg";
import ClearIcon from "@features/modals/assets/icons/clear.svg";

import styles from "./SearchModal.module.scss";

const SearchModalInput = () => {
    const [text, setText] = useState("");

    const dispatch = useAppDispatch();

    const clear = () => setText("");

    const close = () => {
        dispatch(closeSearchModal());
    };

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
