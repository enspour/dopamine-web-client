import { Theme } from "../interfaces";

export const getThemes = async () => {
    const result = await import(`@features/theme/assets/themes/themes.json`);
    return result.default as Theme[];
};
