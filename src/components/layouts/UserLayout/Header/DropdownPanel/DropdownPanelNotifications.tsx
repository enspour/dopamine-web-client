import { FC, memo } from "react";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelNotificationsProps {
    close: () => void;
}

const DropdownPanelNotifications: FC<DropdownPanelNotificationsProps> = () => {
    return (
        <div className={styles.panel__notifications}>
            <div className={styles.panel__notifications__title}>
                Notifications:
            </div>

            <div className={styles.panel__notifications__empty}>
                You don't have notifications
            </div>
        </div>
    );
};

export default memo(DropdownPanelNotifications);
