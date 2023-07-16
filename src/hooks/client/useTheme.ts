import cookies from "js-cookie";
import { useState } from "react";

import {
    THEME_STORAGE_PATH,
    ThemeName,
    isThemeName,
} from "@services/Theme.service";

import services from "@services";

export const useTheme = () => {
    const savedName = cookies.get(THEME_STORAGE_PATH) || "light";

    const [name, setName] = useState<ThemeName>(
        isThemeName(savedName) ? savedName : "light"
    );

    const setTheme = async (name: ThemeName) => {
        await services.Theme.switch(name);
        setName(name);
    };

    return {
        name,
        setTheme,
    };
};
