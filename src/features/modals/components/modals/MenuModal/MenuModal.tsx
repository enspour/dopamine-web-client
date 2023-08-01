"use client";

import { memo, useEffect } from "react";

import Box from "@components/ui/catalog/Box/Box";

import MenuModalHeader from "./MenuModalHeader";
import MenuModalNavigation from "./MenuModalNavigation";

import { useMediaQuery } from "@hooks/client";

import { Modal, useMenuModal } from "@features/modals/client";

const MenuModal = () => {
    const matches = useMediaQuery("(max-width: 768px)");

    const { isOpen, close } = useMenuModal();

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
