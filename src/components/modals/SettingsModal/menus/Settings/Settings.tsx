import { FC, memo } from "react";

import { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";

import SettingsMenus from "./SettingsMenus";
import SettingsThemes from "./SettingsThemes";

import type { Menus } from "../../SettingsModal";

import styles from "./Settings.module.scss";

const Settings: FC<CarouselMenuItemProps<Menus>> = ({ forward, back }) => {
    return (
        <div className={styles.settings}>
            <SettingsMenus forward={forward} />
            <SettingsThemes />
        </div>
    );
};

export default memo(Settings);
