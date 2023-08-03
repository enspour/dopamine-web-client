"use client";

import { memo } from "react";

import Box from "@components/ui/catalog/Box/Box";
import CarouselMenu from "@components/ui/navigation/CarouselMenu/CarouselMenu";

import SettingsModalHeader from "./SettingsModalHeader";

import General from "./menus/General/General";
import Languages from "./menus/Languages/Languages";
import Permissions from "./menus/Permissions/Permissions";
import Security from "./menus/Security/Security";
import Settings from "./menus/Settings/Settings";
import Storage from "./menus/Storage/Storage";

import { useMediaQuery } from "@hooks/client";

import { Modal } from "@features/modals";
import { useSettingsModal } from "@features/modals/client";

import { SettingsMenuId } from "@interfaces";

export type Menu = SettingsMenuId | "settings";

const menu: Record<Menu, any> = {
    settings: {
        header: SettingsModalHeader,
        component: Settings,
    },
    general: {
        header: SettingsModalHeader,
        component: General,
    },
    permissions: {
        header: SettingsModalHeader,
        component: Permissions,
    },
    security: {
        header: SettingsModalHeader,
        component: Security,
    },
    languages: {
        header: SettingsModalHeader,
        component: Languages,
    },
    storage: {
        header: SettingsModalHeader,
        component: Storage,
    },
} as const;

const SettingsModal = () => {
    const matches = useMediaQuery("(max-width: 768px)");

    const { isOpen, close } = useSettingsModal();

    return (
        <Modal isOpen={isOpen} close={close} style={getModalStyles(matches)}>
            <Box style={getBoxStyles(matches)}>
                <CarouselMenu menu={menu} style={{ gap: "4rem" }} />;
            </Box>
        </Modal>
    );
};

const getModalStyles = (matches: boolean) => ({
    width: matches ? "100%" : "90%",
    maxWidth: matches ? "100%" : "90rem",
    height: matches ? "100%" : "90%",
    maxHeight: matches ? "100%" : "65rem",
});

const getBoxStyles = (matches: boolean) => {
    return {
        overflow: "hidden",
        borderRadius: matches ? "0rem" : "2rem",
    } as const;
};

export default memo(SettingsModal);
