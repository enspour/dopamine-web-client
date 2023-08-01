import { FC, memo } from "react";

import SettingsMenuItem from "./SettingsMenuItem";

import { SettingsMenuId } from "@interfaces";

import GeneralIcon from "@features/modals/assets/icons/settings/general.svg";
import LanguagesIcon from "@features/modals/assets/icons/settings/languages.svg";
import PermissionsIcon from "@features/modals/assets/icons/settings/permissions.svg";
import SecurityIcon from "@features/modals/assets/icons/settings/security.svg";
import StorageIcon from "@features/modals/assets/icons/settings/storage.svg";

import styles from "./Settings.module.scss";

interface SettingsMenusProps {
    forward: (name: SettingsMenuId) => void;
}

const SettingsMenus: FC<SettingsMenusProps> = ({ forward }) => {
    const openGeneral = () => {
        forward("general");
    };

    const openPermissions = () => {
        forward("permissions");
    };

    const openSecurity = () => {
        forward("security");
    };

    const openLanguages = () => {
        forward("languages");
    };

    const openStorage = () => {
        forward("storage");
    };

    return (
        <div className={styles.settings__menus}>
            <SettingsMenuItem
                svg={GeneralIcon}
                name="general"
                onClick={openGeneral}
            />

            <SettingsMenuItem
                svg={PermissionsIcon}
                name="permissions"
                onClick={openPermissions}
            />

            <SettingsMenuItem
                svg={SecurityIcon}
                name="security"
                onClick={openSecurity}
            />

            <SettingsMenuItem
                svg={LanguagesIcon}
                name="languages"
                onClick={openLanguages}
            />

            <SettingsMenuItem
                svg={StorageIcon}
                name="storage"
                onClick={openStorage}
            />
        </div>
    );
};

export default memo(SettingsMenus);
