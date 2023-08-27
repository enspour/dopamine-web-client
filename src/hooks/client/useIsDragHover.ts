import { RefObject, useEffect, useState } from "react";

export const useIsDragHover = (ref: RefObject<HTMLElement>) => {
    const [isOver, setIsOver] = useState(false);

    const over = (e: DragEvent) => {
        e.preventDefault();
        setIsOver(true);
    };

    const out = (e: DragEvent) => {
        e.preventDefault();
        setIsOver(false);
    };

    useEffect(() => {
        const element = ref.current;

        if (element) {
            element.addEventListener("dragover", over);
            element.addEventListener("dragenter", over);
            element.addEventListener("dragleave", out);
            element.addEventListener("drop", out);

            return () => {
                element.removeEventListener("dragover", over);
                element.removeEventListener("dragenter", over);
                element.removeEventListener("dragleave", out);
                element.removeEventListener("drop", out);
            };
        }
    }, []);

    return isOver;
};
