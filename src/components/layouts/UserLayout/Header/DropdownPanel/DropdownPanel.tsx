import { FC, memo } from "react";

import Dropdown from "@components/ui/catalog/Dropdown/Dropdown";

import DropdownPanelMenu from "./DropdownPanelMenu";
import DropdownPanelNotifications from "./DropdownPanelNotifications";
import DropdownPanelUser from "./DropdownPanelUser";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelProps {
    isOpen: boolean;
    close: () => void;
}

const DropdownPanel: FC<DropdownPanelProps> = ({ isOpen, close }) => {
    return (
        <Dropdown isOpen={isOpen} location="right">
            <div className={styles.panel}>
                <DropdownPanelUser close={close} />
                <DropdownPanelNotifications close={close} />
                <DropdownPanelMenu close={close} />
            </div>
        </Dropdown>
    );
};

export default memo(DropdownPanel);
