"use client";

import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useAppDispatch } from "@redux/hooks";
import { openSearchModal } from "@redux/slices/modals.slice";

import SearchIcon from "@assets/icons/header/search.svg";

const HeaderSearchControl = () => {
    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openSearchModal());
    };

    return <Icon svg={SearchIcon} onClick={open} />;
};

export default memo(HeaderSearchControl);
