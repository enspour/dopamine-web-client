export const navigation = [
    {
        id: "browse",
        href: "/browse",
    },
    {
        id: "store",
        href: "/store",
    },
    {
        id: "feed",
        href: "/feed",
    },
] as const;

export type Navigation = (typeof navigation)[number];
export type NavigationIds = Navigation["id"];

export const privateNavigationIds = ["/feed", "/store"] as const;

export type PrivateNavigationId = (typeof privateNavigationIds)[number];

export const isPrivateNavigation = (id: string): id is PrivateNavigationId => {
    if (privateNavigationIds.includes(id as PrivateNavigationId)) {
        return true;
    }

    return false;
};
