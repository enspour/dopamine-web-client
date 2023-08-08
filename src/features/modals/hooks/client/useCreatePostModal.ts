import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
    closeCreatePostModal,
    openCreatePostModal,
    selectIsOpenCreatePostModal,
} from "@features/modals/redux";

export const useCreatePostModal = () => {
    const isOpen = useAppSelector(selectIsOpenCreatePostModal);

    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openCreatePostModal());
    };

    const close = () => {
        dispatch(closeCreatePostModal());
    };

    return { isOpen, open, close };
};
