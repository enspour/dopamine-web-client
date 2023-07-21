export const headerNavigationIds = ["browse", "store", "feed"] as const;

export type HeaderNavigationId = (typeof headerNavigationIds)[number];
