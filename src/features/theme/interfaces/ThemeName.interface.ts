export const THEMES_NAMES = ["light", "dark"] as const;
export type ThemeName = (typeof THEMES_NAMES)[number];

export const isThemeName = (name: string): name is ThemeName => {
    return THEMES_NAMES.includes(name as ThemeName);
};
