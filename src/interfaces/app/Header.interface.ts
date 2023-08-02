export const headerDropdownMenuIds = ["channel", "settings", "logout"] as const;

export type HeaderDropdownMenuId = (typeof headerDropdownMenuIds)[number];
