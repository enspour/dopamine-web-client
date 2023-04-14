import { Service } from ".";

export type Theme = "light";

export class ThemeService implements Service {
    initialize(): void {
        this.set("light");
    }

    destroy(): void {}

    async set(theme: Theme) {
        const result = await import(`@assets/themes/${theme}`);

        const properties = result.default;

        for (const property in properties) {
            document.documentElement.style.setProperty(
                property,
                properties[property]
            );
        }
    }
}
