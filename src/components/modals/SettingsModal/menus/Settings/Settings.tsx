import { FC, memo } from "react";

import SettingsMenus from "./SettingsMenu";
import SettingsThemes from "./SettingsThemes";

import type { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";
import type { Menu } from "../../SettingsModal";

import styles from "./Settings.module.scss";

const Settings: FC<CarouselMenuItemProps<Menu>> = ({ forward, back }) => {
    return (
        <div className={styles.settings}>
            <SettingsMenus forward={forward} />
            <SettingsThemes />
        </div>
    );
};

export default memo(Settings);
