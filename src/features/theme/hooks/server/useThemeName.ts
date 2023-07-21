import { cookies } from "next/headers";

import { ThemeName, isThemeName } from "@features/theme/interfaces";

import { THEME_COOKIE_PATH } from "@features/theme/constants";

export const useThemeName = (): ThemeName => {
    const cookiesStore = cookies();

    const name = cookiesStore.get(THEME_COOKIE_PATH)?.value;

    if (name && isThemeName(name)) {
        return name;
    }

    return "light";
};
