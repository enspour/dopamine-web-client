import { FC, memo } from "react";

import { type ContextMenuElementProps } from "@components/ui/catalog/ContextMenu/ContextMenu";

import DropdownPanelMenu from "./DropdownPanelMenu";
import DropdownPanelNotifications from "./DropdownPanelNotifications";
import DropdownPanelUser from "./DropdownPanelUser";

import styles from "./DropdownPanel.module.scss";

const DropdownPanel: FC = (props) => {
    const { close } = props as ContextMenuElementProps;

    return (
        <div className={styles.panel}>
            <DropdownPanelUser close={close} />
            <DropdownPanelNotifications close={close} />
            <DropdownPanelMenu close={close} />
        </div>
    );
};

export default memo(DropdownPanel);
