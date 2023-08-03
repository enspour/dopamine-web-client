"use client";

import { memo } from "react";

import Box from "@components/ui/catalog/Box/Box";

import SearchModalContent from "./SearchModalContent";
import SearchModalInput from "./SearchModalInput";
import SearchModalPagination from "./SearchModalPagination";

import { useMediaQuery } from "@hooks/client";

import { Modal } from "@features/modals";
import { useSearchModal } from "@features/modals/client";

const SearchModal = () => {
    const matches = useMediaQuery("(max-width: 768px)");

    const { isOpen, close } = useSearchModal();

    return (
        <Modal isOpen={isOpen} close={close} style={getModalStyles(matches)}>
            <Box style={getBoxStyles(matches)}>
                <SearchModalInput />
                <SearchModalContent />
                <SearchModalPagination />
            </Box>
        </Modal>
    );
};

const getModalStyles = (matches: boolean) => ({
    width: matches ? "100%" : "90%",
    maxWidth: matches ? "100%" : "90rem",
    height: matches ? "100%" : "90%",
    maxHeight: matches ? "100%" : "70rem",
});

const getBoxStyles = (matches: boolean) => {
    return {
        borderRadius: matches ? "0rem" : "2rem",
    } as const;
};

export default memo(SearchModal);
