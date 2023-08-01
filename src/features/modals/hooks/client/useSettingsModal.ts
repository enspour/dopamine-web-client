"use client";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
    closeSettingsModal,
    openSettingsModal,
    selectIsOpenSettingsModal,
} from "@features/modals/redux";

export const useSettingsModal = () => {
    const isOpen = useAppSelector(selectIsOpenSettingsModal);

    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openSettingsModal());
    };

    const close = () => {
        dispatch(closeSettingsModal());
    };

    return { isOpen, open, close };
};
