import { RefObject, useEffect, useState } from "react";

const useOutsideAlerter = (
    ref: RefObject<HTMLElement>,
    initial: boolean = false
) => {
    const [isOpen, setIsOpen] = useState<boolean>(initial);

    const clickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickOutside);
        return () => document.removeEventListener("click", clickOutside);
    }, []); // eslint-disable-line

    return [isOpen, setIsOpen] as const;
};

export default useOutsideAlerter;
