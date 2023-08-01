"use client";

import { memo, useEffect, useState } from "react";

import SettingsTheme from "./SettingsTheme";

import { getThemes, type Theme } from "@features/theme";
import { useTheme } from "@features/theme/client";

import { InterMessage } from "@features/inter/client";

import styles from "./Settings.module.scss";

const SettingsThemes = () => {
    const [themes, setThemes] = useState<Theme[]>([]);

    const { name, setTheme } = useTheme();

    useEffect(() => {
        getThemes().then((themes) => setThemes(themes));
    }, []);

    return (
        <div className={styles.settings__themes}>
            <div className={styles.settings__themes__title}>
                <InterMessage id="settings.menu.themes.title" />
            </div>

            <div className={styles.settings__themes__items}>
                {themes.map((theme) => (
                    <div key={theme.name}>
                        <SettingsTheme
                            theme={theme}
                            setTheme={setTheme}
                            isActive={theme.name === name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(SettingsThemes);
