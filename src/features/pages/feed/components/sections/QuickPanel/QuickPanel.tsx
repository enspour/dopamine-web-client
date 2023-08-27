"use client";

import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useCreatePostModal } from "@features/modals/client";

import CreateIcon from "@features/pages/feed/assets/icons/create.svg";

import styles from "./QuickPanel.module.scss";

const QuickPanel: FC = () => {
    const { open } = useCreatePostModal();

    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.panel__button} onClick={open}>
                    <Icon svg={CreateIcon} />
                </div>
            </div>
        </div>
    );
};

export default memo(QuickPanel);
