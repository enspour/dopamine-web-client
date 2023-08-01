import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { InterMessage } from "@features/internationalization/client";

import { closeSettingsModal } from "@features/modals/redux/slices/modals.slice";
import { useAppDispatch } from "@redux/hooks";

import BackIcon from "@features/modals/assets/icons/back.svg";

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
