import Cookie from "js-cookie";

import { Service } from ".";

import { getThemeProperties } from "@utils";

export const THEME_STORAGE_PATH = "--theme-name";

export const THEMES = ["light", "dark"] as const;
export const THEME_PALETTES = ["primary"] as const;

export type Theme = (typeof THEMES)[number];
export type ThemePalette = (typeof THEME_PALETTES)[number];

export class ThemeService implements Service {
    async initialize() {}

    async destroy() {}

    async switch(theme: Theme) {
        const properties = await getThemeProperties(theme);
        this.set(properties);
        this.save(theme);
    }

    private set(properties: any) {
        const html = document.querySelector("html");

        for (const property in properties) {
            html?.style.setProperty(property, properties[property]);
        }
    }

    private save(theme: Theme) {
        Cookie.set(THEME_STORAGE_PATH, theme);
    }
}
