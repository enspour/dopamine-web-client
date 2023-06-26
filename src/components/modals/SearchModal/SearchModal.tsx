"use client";

import { memo } from "react";

import Box from "@components/ui/catalog/Box/Box";
import Modal from "@components/ui/catalog/Modal/Modal";

import SearchModalContent from "./SearchModalContent";
import SearchModalInput from "./SearchModalInput";
import SearchModalPagination from "./SearchModalPagination";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
    closeSearchModal,
    selectIsOpenSearchModal,
} from "@redux/slices/modals.slice";

const SearchModal = () => {
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(selectIsOpenSearchModal);

    const close = () => {
        dispatch(closeSearchModal());
    };

    return (
        <Modal
            isOpen={isOpen}
            close={close}
            style={{
                width: "90%",
                maxWidth: "90rem",
                height: "90%",
                maxHeight: "70rem",
            }}
        >
            <Box style={{ flexDirection: "column" }}>
                <SearchModalInput />
                <SearchModalContent />
                <SearchModalPagination />
            </Box>
        </Modal>
    );
};

export default memo(SearchModal);
