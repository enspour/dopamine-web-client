import { RefObject, useEffect, useState } from "react";

const useOutsideClickAlerter = (...refs: RefObject<HTMLElement>[]) => {
    const [isOpen, setIsOpen] = useState(false);

    const clickOutside = (e: MouseEvent) => {
        const isAllNotContains = refs.every(
            (ref) => ref.current && !ref.current.contains(e.target as Node)
        );

        if (isAllNotContains) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickOutside);
        return () => document.removeEventListener("click", clickOutside);
    }, []);

    return [isOpen, setIsOpen] as const;
};

export default useOutsideClickAlerter;
