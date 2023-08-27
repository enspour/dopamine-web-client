"use client";

import { CSSProperties, FC, RefObject, memo } from "react";

import DroppingFiles from "@components/ui/catalog/DroppingFiles/DroppingFiles";

import { useIsDragHover } from "@hooks/client";

import styles from "./CreatePostModal.module.scss";

interface CreatePostModalFormFileDropperProps {
    formRef: RefObject<HTMLDivElement>;
    handleFiles: (...files: File[]) => void;
}

const CreatePostModalFormFileDropper: FC<
    CreatePostModalFormFileDropperProps
> = ({ formRef, handleFiles }) => {
    const isDragHover = useIsDragHover(formRef);

    const handler = (files: File[]) => {
        handleFiles(...files);
    };

    return (
        <div
            className={styles.form__file__dropper}
            style={getDroppingStyle(isDragHover)}
        >
            <DroppingFiles handler={handler} />
        </div>
    );
};

const getDroppingStyle = (isDragHover: boolean): CSSProperties => ({
    visibility: isDragHover ? "visible" : "hidden",
});

export default memo(CreatePostModalFormFileDropper);
