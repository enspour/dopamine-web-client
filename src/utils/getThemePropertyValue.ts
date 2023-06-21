import type { ThemePalette } from "@services/Theme.service";

export const getThemePropertyValue = (
    property: string,
    palette: ThemePalette = "primary"
) => {
    return `var(--theme-${palette}-${property})`;
};
