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
