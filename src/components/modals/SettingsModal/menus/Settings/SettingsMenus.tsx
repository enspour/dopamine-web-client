import { FC, memo } from "react";

import { Menus } from "../../SettingsModal";
import SettingsMenusItem from "./SettingsMenusItem";

import GeneralIcon from "@assets/icons/settings/general.svg";
import LanguagesIcon from "@assets/icons/settings/languages.svg";
import PermissionsIcon from "@assets/icons/settings/permissions.svg";
import SecurityIcon from "@assets/icons/settings/security.svg";
import StorageIcon from "@assets/icons/settings/storage.svg";

import styles from "./Settings.module.scss";

interface SettingsMenusProps {
    forward: (name: Menus) => void;
}

const SettingsMenus: FC<SettingsMenusProps> = ({ forward }) => {
    const openGeneral = () => {
        forward("General");
    };

    const openPermissions = () => {
        forward("Permissions");
    };

    const openSecurity = () => {
        forward("Security");
    };

    const openLanguages = () => {
        forward("Languages");
    };

    const openStorage = () => {
        forward("Storage");
    };

    return (
        <div className={styles.settings__menus}>
            <SettingsMenusItem
                svg={GeneralIcon}
                name="General"
                description="View and update your information"
                onClick={openGeneral}
            />

            <SettingsMenusItem
                svg={PermissionsIcon}
                name="Permissions"
                description="What stuff other users can see or do in your store"
                onClick={openPermissions}
            />

            <SettingsMenusItem
                svg={SecurityIcon}
                name="Security"
                description="Manage your security"
                onClick={openSecurity}
            />

            <SettingsMenusItem
                svg={LanguagesIcon}
                name="Languages"
                description="Choose the required language"
                onClick={openLanguages}
            />

            <SettingsMenusItem
                svg={StorageIcon}
                name="Storage"
                description="Manage you local storage"
                onClick={openStorage}
            />
        </div>
    );
};

export default memo(SettingsMenus);
