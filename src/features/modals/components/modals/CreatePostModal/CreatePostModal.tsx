"use client";

import { memo } from "react";

import Box from "@components/ui/catalog/Box/Box";

import CreatePostModalForm from "./CreatePostModalForm";
import CreatePostModalHeader from "./CreatePostModalHeader";

import { useMediaQuery } from "@hooks/client";

import { Modal } from "@features/modals";
import { useCreatePostModal } from "@features/modals/client";

const CreatePostModal = () => {
    const matches = useMediaQuery("(max-width: 768px)");

    const { isOpen, close } = useCreatePostModal();

    return (
        <Modal isOpen={isOpen} close={close} style={getModalStyles(matches)}>
            <Box style={getBoxStyles(matches)}>
                <CreatePostModalHeader />
                <CreatePostModalForm />
            </Box>
        </Modal>
    );
};

const getModalStyles = (matches: boolean) => ({
    width: matches ? "100%" : "90%",
    maxWidth: matches ? "100%" : "60rem",
    height: matches ? "100%" : "fit-content",
    maxHeight: matches ? "100%" : "70rem",
});

const getBoxStyles = (matches: boolean) => {
    return {
        gap: "3rem",
        padding: "2rem 4rem",
        borderRadius: matches ? "0rem" : "2rem",
    } as const;
};

export default memo(CreatePostModal);
