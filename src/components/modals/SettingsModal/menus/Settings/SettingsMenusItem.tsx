import { FC, memo } from "react";

import Icon, { SvgProps } from "@components/ui/catalog/Icon/Icon";

import styles from "./Settings.module.scss";

interface SettingsMenusItemProps {
    svg: FC<SvgProps>;
    name: string;
    description: string;
    onClick: () => void;
}

const SettingsMenusItem: FC<SettingsMenusItemProps> = ({
    svg,
    name,
    description,
    onClick,
}) => {
    return (
        <div className={styles.settings__menus__item} onClick={onClick}>
            <div className={styles.settings__menus__item__header}>
                <Icon svg={svg} />

                <div className={styles.settings__menus__item__header__name}>
                    {name}
                </div>
            </div>

            <div className={styles.settings__menus__item__description}>
                {description}
            </div>
        </div>
    );
};

export default memo(SettingsMenusItem);
