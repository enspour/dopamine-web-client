import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useCreatePostModal } from "@features/modals/client";

import BackIcon from "@features/modals/assets/icons/general/back.svg";

import styles from "./CreatePostModal.module.scss";

const CreatePostModalHeader: FC = () => {
    const { close } = useCreatePostModal();

    return (
        <div className={styles.modal__header} onClick={close}>
            <Icon svg={BackIcon} />
            <div>Create New Post</div>
        </div>
    );
};

export default memo(CreatePostModalHeader);
