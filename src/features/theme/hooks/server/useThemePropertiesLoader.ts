import { useCookieThemeName } from "./useCookieThemeName";

import { getThemeProperties } from "@features/theme/utils";

export const useThemePropertiesLoader = async () => {
    const name = useCookieThemeName();
    return await getThemeProperties(name);
};
