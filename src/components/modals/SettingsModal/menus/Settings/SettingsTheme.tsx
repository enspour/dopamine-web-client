import { FC, memo } from "react";

import { type Theme, type ThemeName } from "@features/theme";

import styles from "./Settings.module.scss";

interface SettingsThemeProps {
    theme: Theme;
    setTheme: (name: ThemeName) => Promise<void>;
    isActive: boolean;
}

const SettingsTheme: FC<SettingsThemeProps> = ({
    theme,
    setTheme,
    isActive,
}) => {
    const applyTheme = async () => {
        await setTheme(theme.name);
    };

    return (
        <div
            className={getClassName(isActive)}
            onClick={applyTheme}
            style={{ backgroundColor: theme.primary }}
        >
            <div
                style={{
                    borderTop: `6rem solid ${theme.primary}`,
                    borderRight: `6rem solid ${theme.secondary}`,
                }}
            ></div>
        </div>
    );
};

const getClassName = (isActive: boolean) => {
    if (isActive)
        return `${styles.settings__theme} ${styles.settings__theme__active}`;

    return styles.settings__theme;
};

export default memo(SettingsTheme);
