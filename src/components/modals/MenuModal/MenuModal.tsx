"use client";

import { memo, useEffect } from "react";

import Box from "@components/ui/catalog/Box/Box";
import Modal from "@components/ui/catalog/Modal/Modal";

import MenuModalHeader from "./MenuModalHeader";
import MenuModalNavigation from "./MenuModalNavigation";

import { useMediaQuery } from "@hooks/client";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
    closeMenuModal,
    selectIsOpenMenuModal,
} from "@redux/slices/modals.slice";

const MenuModal = () => {
    const matches = useMediaQuery("(max-width: 768px)");

    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(selectIsOpenMenuModal);

    const close = () => {
        dispatch(closeMenuModal());
    };

    useEffect(() => {
        !matches && close();
    }, [matches]);

    return (
        <Modal isOpen={isOpen} close={close}>
            <Box style={getBoxStyles()}>
                <MenuModalHeader />
                <MenuModalNavigation />
            </Box>
        </Modal>
    );
};

const getBoxStyles = () => {
    return {
        borderRadius: "0rem",
    } as const;
};

export default memo(MenuModal);
