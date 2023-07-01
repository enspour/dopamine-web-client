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

export type Menus =
    | "Settings"
    | "General"
    | "Permissions"
    | "Security"
    | "Languages"
    | "Storage";

const menus = {
    Settings: {
        header: SettingsModalHeader,
        component: Settings,
    },
    General: {
        header: SettingsModalHeader,
        component: General,
    },
    Permissions: {
        header: SettingsModalHeader,
        component: Permissions,
    },
    Security: {
        header: SettingsModalHeader,
        component: Security,
    },
    Languages: {
        header: SettingsModalHeader,
        component: Languages,
    },
    Storage: {
        header: SettingsModalHeader,
        component: Storage,
    },
};

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
                <CarouselMenu menus={menus} style={{ gap: "4rem" }} />;
            </Box>
        </Modal>
    );
};

export default memo(SettingsModal);
