import { memo, useEffect, useState } from "react";

import SettingsTheme from "./SettingsTheme";

import { useTheme } from "@hooks/client";

import { getThemes, type Theme } from "@services/Theme.service";

import styles from "./Settings.module.scss";

const SettingsThemes = () => {
    const [themes, setThemes] = useState<Theme[]>([]);

    const { name, setTheme } = useTheme();

    useEffect(() => {
        getThemes().then((themes) => setThemes(themes));
    }, []);

    return (
        <div className={styles.settings__themes}>
            <div className={styles.settings__themes__title}>Themes</div>

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
