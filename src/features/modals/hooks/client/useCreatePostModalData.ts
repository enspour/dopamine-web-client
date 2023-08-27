import { type SetStateAction } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hooks";

import {
    resetCreatePostModalData,
    selectCreatePostModalDataFiles,
    selectCreatePostModalDataText,
    setCreatePostModalDataFiles,
    setCreatePostModalDataText,
} from "@features/modals/client";

import { FileMetadata } from "@features/files";

export const useCreatePostModalData = () => {
    const text = useAppSelector(selectCreatePostModalDataText);
    const files = useAppSelector(selectCreatePostModalDataFiles);

    const dispatch = useAppDispatch();

    const setText = (value: SetStateAction<string>) => {
        if (typeof value === "function") {
            value = value(text);
        }

        dispatch(setCreatePostModalDataText(value));
    };

    const setFiles = (value: SetStateAction<FileMetadata[]>) => {
        if (typeof value === "function") {
            value = value(files);
        }

        dispatch(setCreatePostModalDataFiles(value));
    };

    const reset = () => {
        dispatch(resetCreatePostModalData());
    };

    return {
        text,
        setText,
        files,
        setFiles,
        reset,
    };
};
