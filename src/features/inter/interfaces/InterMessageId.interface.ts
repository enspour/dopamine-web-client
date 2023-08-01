import {
    headerDropdownMenuIds,
    navigation,
    settingsMenuIds,
} from "@interfaces";

const navigationInterMessageIds = [
    ...navigation.map((item) => `nav.${item}.name` as const),
] as const;

const settingsInterMessageIds = [
    ...settingsMenuIds.map((item) => `settings.menu.${item}.name` as const),
    ...settingsMenuIds.map(
        (item) => `settings.menu.${item}.description` as const
    ),

    "settings.menu.header.title",
    "settings.menu.header.logout.title",
    "settings.menu.themes.title",
] as const;

const headerInterMessageIds = [
    ...headerDropdownMenuIds.map(
        (item) => `header.dropdown.menu.${item}.name` as const
    ),

    "header.dropdown.notifications.title",
    "header.dropdown.notifications.hint.empty",
] as const;

export const interMessageIds = [
    ...navigationInterMessageIds,
    ...settingsInterMessageIds,
    ...headerInterMessageIds,
] as const;

export type InterMessageId = (typeof interMessageIds)[number];
