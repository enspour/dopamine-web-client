import { useThemeName } from "./useThemeName";

import { getThemeProperties } from "@features/theme/utils";

export const useThemeProperties = async () => {
    const name = useThemeName();
    return await getThemeProperties(name);
};
