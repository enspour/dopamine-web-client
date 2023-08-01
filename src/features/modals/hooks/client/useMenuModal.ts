"use client";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
    closeMenuModal,
    openMenuModal,
    selectIsOpenMenuModal,
} from "@features/modals/redux";

export const useMenuModal = () => {
    const isOpen = useAppSelector(selectIsOpenMenuModal);

    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openMenuModal());
    };

    const close = () => {
        dispatch(closeMenuModal());
    };

    return { isOpen, open, close };
};
