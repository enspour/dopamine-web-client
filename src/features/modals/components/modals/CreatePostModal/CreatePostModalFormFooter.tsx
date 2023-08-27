"use client";

import { ChangeEvent, FC } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import CreatePostModalFormSubmit from "./CreatePostModalFormSubmit";

import AttachIcon from "@features/modals/assets/icons/create-post/attach.svg";

import styles from "./CreatePostModal.module.scss";

interface CreatePostModalFormFooterProps {
    handleFiles: (...files: File[]) => void;
}

const CreatePostModalFormFooter: FC<CreatePostModalFormFooterProps> = ({
    handleFiles,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        handleFiles(...files);
    };

    return (
        <div className={styles.form__footer}>
            <label>
                <Icon svg={AttachIcon} />
                <input type="file" multiple onChange={handleChange} hidden />
            </label>

            <CreatePostModalFormSubmit />
        </div>
    );
};

export default CreatePostModalFormFooter;
