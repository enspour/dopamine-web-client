import Cookie from "js-cookie";

import { Service } from ".";

import { getThemeProperties } from "@utils";

export type Theme = "light" | "dark";

export type Palette = "primary";

export const COOKIE_NAME = "--theme-name";

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
        Cookie.set(COOKIE_NAME, theme);
    }
}
