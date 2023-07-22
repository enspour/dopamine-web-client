import type { ThemeName } from "../interfaces";

export const getThemeProperties = async (name: ThemeName) => {
    const result = await import(`@features/theme/assets/themes/${name}.json`);
    return result.default;
};
