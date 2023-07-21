export const locates = ["en-US", "ru-RU"] as const;

export type Locate = (typeof locates)[number];

export const isLocate = (locate: string): locate is Locate => {
    return locates.includes(locate as Locate);
};
