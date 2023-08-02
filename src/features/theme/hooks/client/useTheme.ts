import cookies from "js-cookie";
import { useState } from "react";

import { THEME_COOKIE_PATH } from "@features/theme/constants";

import {
    getThemeProperties,
    isThemeName,
    type ThemeName,
} from "@features/theme";

export const useTheme = () => {
    const savedName = cookies.get(THEME_COOKIE_PATH) || "light";

    const [name, setName] = useState<ThemeName>(
        isThemeName(savedName) ? savedName : "light"
    );

    const setTheme = async (name: ThemeName) => {
        const properties = await getThemeProperties(name);

        for (const property in properties) {
            document.documentElement.style.setProperty(
                property,
                properties[property]
            );
        }

        cookies.set(THEME_COOKIE_PATH, name);
    };

    const update = async (name: ThemeName) => {
        await setTheme(name);
        setName(name);
    };

    return [name, update] as const;
};
