import { cookies } from "next/headers";

import type { Theme } from "@services/Theme.service";
import { THEME_STORAGE_PATH } from "@services/Theme.service";

import { isTheme } from "@utils";

const useThemeCookie = (): Theme => {
    const cookieStore = cookies();
    const theme = cookieStore.get(THEME_STORAGE_PATH)?.value;

    if (theme && isTheme(theme)) {
        return theme;
    }

    return "light";
};

export { useThemeCookie };
