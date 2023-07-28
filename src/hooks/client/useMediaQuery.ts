import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
    const [matches, setMatches] = useState(window.matchMedia(media).matches);

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
