export const browseNavigation = {
    id: "browse",
    path: "/browse",
} as const;

export const storeNavigation = {
    id: "store",
    path: "/store",
} as const;

export const feedNavigation = {
    id: "feed",
    path: "/feed",
} as const;

export const navigation = [
    browseNavigation,
    storeNavigation,
    feedNavigation,
] as const;

export const navigationIds = navigation.map((nav) => nav.id);
export const navigationPath = navigation.map((nav) => nav.path);

export type Navigation = (typeof navigation)[number];
export type NavigationIds = (typeof navigationIds)[number];
export type NavigationPath = (typeof navigationPath)[number];

export const privateNavigation = [storeNavigation, feedNavigation] as const;

export const privateNavigationIds = privateNavigation.map((nav) => nav.id);
export const privateNavigationPaths = privateNavigation.map((nav) => nav.path);

export type PrivateNavigation = (typeof privateNavigation)[number];
export type PrivateNavigationIds = (typeof privateNavigationIds)[number];
export type PrivateNavigationPath = (typeof privateNavigationPaths)[number];

export const isPrivateNavigationPath = (
    path: string
): path is PrivateNavigationPath => {
    if (privateNavigationPaths.includes(path as PrivateNavigationPath)) {
        return true;
    }

    return false;
};
