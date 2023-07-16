import { cookies } from "next/headers";

import {
    THEME_STORAGE_PATH,
    ThemeName,
    isThemeName,
} from "@services/Theme.service";

export const useThemeName = (): ThemeName => {
    const cookieStore = cookies();

    const name = cookieStore.get(THEME_STORAGE_PATH)?.value;

    if (name && isThemeName(name)) {
        return name;
    }

    return "light";
};
