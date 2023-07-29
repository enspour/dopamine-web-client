import { useEffect, useState } from "react";

export const useMediaQuery = (media: string, initial: boolean = false) => {
    const [matches, setMatches] = useState(
        typeof window !== "undefined"
            ? window.matchMedia(media).matches
            : initial
    );

    useEffect(() => {
        const handler = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        window.matchMedia(media).addEventListener("change", handler);

        return () => {
            window.matchMedia(media).removeEventListener("change", handler);
        };
    }, []);

    return matches;
};
