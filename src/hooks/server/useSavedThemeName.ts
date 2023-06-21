import { cookies } from "next/headers";

import {
    THEME_STORAGE_PATH,
    isThemeName,
    type ThemeName,
} from "@services/Theme.service";

const useSavedThemeName = (): ThemeName => {
    const cookieStore = cookies();

    const name = cookieStore.get(THEME_STORAGE_PATH)?.value;

    if (name && isThemeName(name)) {
        return name;
    }

    return "light";
};

export default useSavedThemeName;
