import cookies from "js-cookie";

import { Service } from ".";

export const THEME_STORAGE_PATH = "--theme-name";

export const THEMES_NAMES = ["light", "dark"] as const;
export const THEME_PALETTES = [
    "primary",
    "secondary",
    "switcher",
    "code",
    "pagination",
] as const;

export type ThemeName = (typeof THEMES_NAMES)[number];
export type ThemePalette = (typeof THEME_PALETTES)[number];

export interface Theme {
    name: ThemeName;
    primary: string;
    secondary: string;
}

export class ThemeService implements Service {
    async initialize() {}

    async destroy() {}

    async switch(name: ThemeName) {
        const properties = await getThemeProperties(name);

        this.set(properties);
        this.save(name);
    }

    private set(properties: any) {
        for (const property in properties) {
            document.documentElement.style.setProperty(
                property,
                properties[property]
            );
        }
    }

    private save(name: ThemeName) {
        cookies.set(THEME_STORAGE_PATH, name);
    }
}

export const getThemes = async () => {
    const result = await import(`@assets/themes/themes.json`);
    return result.default as Theme[];
};

export const getThemeProperties = async (name: ThemeName) => {
    const result = await import(`@assets/themes/${name}.json`);
    return result.default;
};

export const isThemeName = (name: string): name is ThemeName => {
    return THEMES_NAMES.includes(name as ThemeName);
};
