import { FC, memo } from "react";

import { InterMessage } from "@features/internationalization/client";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelNotificationsProps {
    close: () => void;
}

const DropdownPanelNotifications: FC<DropdownPanelNotificationsProps> = () => {
    return (
        <div className={styles.panel__notifications}>
            <div className={styles.panel__notifications__title}>
                <InterMessage id="header.dropdown.notifications.title" />
            </div>

            <div className={styles.panel__notifications__empty}>
                <InterMessage id="header.dropdown.notifications.hint.empty" />
            </div>
        </div>
    );
};

export default memo(DropdownPanelNotifications);
