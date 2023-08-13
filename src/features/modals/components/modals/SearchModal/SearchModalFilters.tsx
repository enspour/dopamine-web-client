"use client";

import { FC, memo, useRef } from "react";

import Button from "@components/ui/catalog/Button/Button";
import ContextMenu from "@components/ui/catalog/ContextMenu/ContextMenu";

import SearchModalFiltersMenu from "./SearchModalFiltersMenu";

import styles from "./SearchModal.module.scss";

const SearchModalFilters: FC = () => {
    const filtersRef = useRef(null);

    return (
        <div ref={filtersRef} className={styles.search__filters}>
            <ContextMenu style={{ gap: "0.5rem", location: "right" }}>
                <Button height="3rem" width="8rem">
                    Filters
                </Button>

                <SearchModalFiltersMenu />
            </ContextMenu>
        </div>
    );
};

export default memo(SearchModalFilters);
