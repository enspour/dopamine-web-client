import { MouseEvent, RefObject } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, click: () => void) => {
    const clickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            click();
        }
    };

    return clickOutside;
};

export default useOutsideClick;
