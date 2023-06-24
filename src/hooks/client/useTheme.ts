import Cookie from "js-cookie";
import { useState } from "react";

import {
    THEME_STORAGE_PATH,
    isThemeName,
    type ThemeName,
} from "@services/Theme.service";

import services from "@services";

const useTheme = () => {
    const savedName = Cookie.get(THEME_STORAGE_PATH) || "light";

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

export default useTheme;
