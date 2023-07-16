export type ComponentType = "server" | "client";

export const getComponentType = (): ComponentType =>
    typeof window === "undefined" ? "server" : "client";
