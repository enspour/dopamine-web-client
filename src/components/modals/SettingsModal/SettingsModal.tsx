"use client";

import { memo } from "react";

import Box from "@components/ui/catalog/Box/Box";
import Modal from "@components/ui/catalog/Modal/Modal";
import CarouselMenu from "@components/ui/navigation/CarouselMenu/CarouselMenu";

import SettingsModalHeader from "./SettingsModalHeader";

import General from "./menus/General/General";
import Languages from "./menus/Languages/Languages";
import Permissions from "./menus/Permissions/Permissions";
import Security from "./menus/Security/Security";
import Settings from "./menus/Settings/Settings";
import Storage from "./menus/Storage/Storage";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
    closeSettingsModal,
    selectIsOpenSettingsModal,
} from "@redux/slices/modals.slice";

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
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(selectIsOpenSettingsModal);

    const close = () => {
        dispatch(closeSettingsModal());
    };

    return (
        <Modal
            isOpen={isOpen}
            close={close}
            style={{
                width: "90%",
                maxWidth: "90rem",
                height: "90%",
                maxHeight: "65rem",
            }}
        >
            <Box style={{ overflow: "hidden" }}>
                <CarouselMenu menu={menu} style={{ gap: "4rem" }} />;
            </Box>
        </Modal>
    );
};

export default memo(SettingsModal);
