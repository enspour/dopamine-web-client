import cookies from "js-cookie";
import { useState } from "react";

import { THEME_COOKIE_PATH } from "@features/theme/constants";

import { ThemeName, isThemeName } from "@features/theme/interfaces";

import { getThemeProperties } from "@features/theme/utils";

export const useTheme = () => {
    const savedName = cookies.get(THEME_COOKIE_PATH) || "light";

    const [name, setName] = useState<ThemeName>(
        isThemeName(savedName) ? savedName : "light"
    );

    const switchTheme = async (name: ThemeName) => {
        const properties = await getThemeProperties(name);

        for (const property in properties) {
            document.documentElement.style.setProperty(
                property,
                properties[property]
            );
        }

        cookies.set(THEME_COOKIE_PATH, name);
    };

    const setTheme = async (name: ThemeName) => {
        await switchTheme(name);
        setName(name);
    };

    return {
        name,
        setTheme,
    };
};
