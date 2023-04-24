import type { Palette, Theme } from "@services/Theme.service";

export const getThemeValue = (
    property: string,
    palette: Palette = "primary"
) => {
    return `var(--theme-${palette}-${property})`;
};

export const getThemeProperties = async (theme: Theme) => {
    const result = await import(`@assets/themes/${theme}.json`);
    return result.default;
};
