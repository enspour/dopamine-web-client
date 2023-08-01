"use client";

import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useSearchModal } from "@features/modals/client";

import SearchIcon from "@assets/icons/header/search.svg";

const HeaderSearchControl = () => {
    const { open } = useSearchModal();

    return <Icon svg={SearchIcon} onClick={open} />;
};

export default memo(HeaderSearchControl);
