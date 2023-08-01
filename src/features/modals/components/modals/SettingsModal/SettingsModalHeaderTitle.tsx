import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { InterMessage } from "@features/inter/client";

import { useSettingsModal } from "@features/modals/client";

import BackIcon from "@features/modals/assets/icons/back.svg";

import styles from "./SettingsModal.module.scss";

const SettingsModalHeaderTitle = () => {
    const { close } = useSettingsModal();

    return (
        <div className={styles.header__title} onClick={close}>
            <Icon svg={BackIcon} />
            <InterMessage id="settings.menu.header.title" />
        </div>
    );
};

export default memo(SettingsModalHeaderTitle);
