import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { InterMessage } from "@features/internationalization/client";

import { useAppDispatch } from "@redux/hooks";
import { closeSettingsModal } from "@redux/slices/modals.slice";

import BackIcon from "@assets/icons/modal/back.svg";

import styles from "./SettingsModal.module.scss";

const SettingsModalHeaderTitle = () => {
    const dispatch = useAppDispatch();

    const close = () => {
        dispatch(closeSettingsModal());
    };

    return (
        <div className={styles.header__title} onClick={close}>
            <Icon svg={BackIcon} />
            <InterMessage id="settings.menu.header.title" />
        </div>
    );
};

export default memo(SettingsModalHeaderTitle);
