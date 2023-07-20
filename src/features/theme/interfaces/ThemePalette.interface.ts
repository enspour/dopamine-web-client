export const THEME_PALETTES = [
    "primary",
    "secondary",
    "switcher",
    "code",
    "pagination",
] as const;

export type ThemePalette = (typeof THEME_PALETTES)[number];
