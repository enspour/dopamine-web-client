import type { ThemePalette } from "../interfaces";

export const getThemePropertyValue = (
    property: string,
    palette: ThemePalette = "primary"
) => {
    return `var(--theme-${palette}-${property})`;
};
