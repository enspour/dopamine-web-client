import { FC, memo } from "react";

import Icon, { SvgProps } from "@components/ui/catalog/Icon/Icon";

import { InterMessage } from "@features/internationalization/client";

import { SettingsMenuId } from "@interfaces";

import styles from "./Settings.module.scss";

interface SettingsMenuItemProps {
    svg: FC<SvgProps>;
    name: SettingsMenuId;
    onClick: () => void;
}

const SettingsMenuItem: FC<SettingsMenuItemProps> = ({
    svg,
    name,
    onClick,
}) => {
    return (
        <div className={styles.settings__menus__item} onClick={onClick}>
            <div className={styles.settings__menus__item__header}>
                <Icon svg={svg} />

                <div className={styles.settings__menus__item__header__name}>
                    <InterMessage id={`settings.menu.${name}.name`} />
                </div>
            </div>

            <div className={styles.settings__menus__item__description}>
                <InterMessage id={`settings.menu.${name}.description`} />
            </div>
        </div>
    );
};

export default memo(SettingsMenuItem);
