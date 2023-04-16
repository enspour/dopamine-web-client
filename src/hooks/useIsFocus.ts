import { RefObject, useEffect, useState } from "react";

const useIsFocus = (ref: RefObject<HTMLElement>) => {
    const [isFocus, setIsFocus] = useState(false);

    const focus = () => setIsFocus(true);
    const unfocus = () => setIsFocus(false);

    useEffect(() => {
        const element = ref.current;

        if (element) {
            element.addEventListener("focusin", focus);
            element.addEventListener("focusout", unfocus);

            return () => {
                element.removeEventListener("focusin", focus);
                element.removeEventListener("focusout", unfocus);
            };
        }
    }, [ref]);

    return isFocus;
};

export { useIsFocus };
