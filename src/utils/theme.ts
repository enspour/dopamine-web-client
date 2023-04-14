import { Palette } from "@services/Theme.service";

export const getProperty = (property: string, palette: Palette = "primary") => {
    return `var(--theme-${palette}-${property})`;
};
