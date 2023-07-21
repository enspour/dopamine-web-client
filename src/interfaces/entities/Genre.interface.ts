export const genres = ["Hip-hop", "Rock", "Pop"] as const;

export type Genre = (typeof genres)[number];
