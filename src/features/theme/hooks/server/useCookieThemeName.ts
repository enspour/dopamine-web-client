import { cookies } from "next/headers";

import {
    THEME_COOKIE_PATH,
    isThemeName,
    type ThemeName,
} from "@features/theme";

export const useCookieThemeName = (): ThemeName => {
    const cookiesStore = cookies();

    const name = cookiesStore.get(THEME_COOKIE_PATH)?.value;

    if (name && isThemeName(name)) {
        return name;
    }

    return "light";
};
