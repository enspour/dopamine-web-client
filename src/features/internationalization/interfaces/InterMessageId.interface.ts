import {
    headerDropdownMenuIds,
    headerNavigationIds,
    settingsMenuIds,
} from "@interfaces";

const settingsInterMessageIds = [
    ...settingsMenuIds.map((item) => `settings.menu.${item}.name` as const),
    ...settingsMenuIds.map(
        (item) => `settings.menu.${item}.description` as const
    ),

    "settings.menu.title",
    "settings.menu.themes.title",
] as const;

const headerInterMessageIds = [
    ...headerNavigationIds.map((item) => `header.nav.${item}.name` as const),
    ...headerDropdownMenuIds.map(
        (item) => `header.dropdown.menu.${item}.name` as const
    ),

    "header.dropdown.notifications.title",
    "header.dropdown.notifications.hint.empty",
] as const;

export const interMessageIds = [
    ...settingsInterMessageIds,
    ...headerInterMessageIds,
] as const;

export type InterMessageId = (typeof interMessageIds)[number];
