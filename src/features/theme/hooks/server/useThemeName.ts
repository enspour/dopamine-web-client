import { cookies } from "next/headers";

import { ThemeName, isThemeName } from "@features/theme/interfaces";

import { THEME_STORAGE_PATH } from "@features/theme/constants";

export const useThemeName = (): ThemeName => {
    const cookieStore = cookies();

    const name = cookieStore.get(THEME_STORAGE_PATH)?.value;

    if (name && isThemeName(name)) {
        return name;
    }

    return "light";
};
