import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
    closeSearchModal,
    openSearchModal,
    selectIsOpenSearchModal,
} from "@features/modals/redux";

export const useSearchModal = () => {
    const isOpen = useAppSelector(selectIsOpenSearchModal);

    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openSearchModal());
    };

    const close = () => {
        dispatch(closeSearchModal());
    };

    return { isOpen, open, close };
};
