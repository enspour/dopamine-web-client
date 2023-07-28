export const settingsMenuIds = [
    "general",
    "permissions",
    "security",
    "languages",
    "storage",
] as const;

export type SettingsMenuId = (typeof settingsMenuIds)[number];
