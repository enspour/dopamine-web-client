"use client";

import { FC, memo, useRef } from "react";

import CreatePostModalFormFileDropper from "./CreatePostModalFormFileDropper";
import CreatePostModalFormFooter from "./CreatePostModalFormFooter";
import CreatePostModalFormMain from "./CreatePostModalFormMain";

import { FileList } from "@features/files";
import { useFilesUploader } from "@features/files/client";

import { useCreatePostModalData } from "@features/modals/client";

import styles from "./CreatePostModal.module.scss";

const CreatePostModalForm: FC = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const { files, setFiles } = useCreatePostModalData();

    const { upload } = useFilesUploader((file) => {
        setFiles((prev) => [...prev, file]);
    });

    return (
        <div ref={formRef} className={styles.form}>
            <CreatePostModalFormMain />

            {!!files.length && <FileList files={files} />}

            <CreatePostModalFormFooter handleFiles={upload} />

            <CreatePostModalFormFileDropper
                formRef={formRef}
                handleFiles={upload}
            />
        </div>
    );
};

export default memo(CreatePostModalForm);
