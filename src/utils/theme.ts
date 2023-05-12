import type { Theme, ThemePalette } from "@services/Theme.service";
import { THEMES } from "@services/Theme.service";

export const getThemeValue = (
    property: string,
    palette: ThemePalette = "primary"
) => {
    return `var(--theme-${palette}-${property})`;
};

export const getThemeProperties = async (theme: Theme) => {
    const result = await import(`@assets/themes/${theme}.json`);
    return result.default;
};

export const isTheme = (theme: string): theme is Theme => {
    return THEMES.includes(theme as Theme);
};
