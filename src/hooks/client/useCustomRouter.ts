import { useEffect, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";

type Waiter = (pathname: string) => void;

export const useCustomRouter = () => {
    const router = useRouter();

    const pathname = usePathname();
    const newPathname = useRef("");

    const waiterRef = useRef<Waiter | null>(null);

    const push = async (href: string) => {
        router.push(href);
        newPathname.current = href;
        return await new Promise((resolve) => (waiterRef.current = resolve));
    };

    useEffect(() => {
        if (waiterRef.current && pathname === newPathname.current) {
            const waiter = waiterRef.current;
            waiter(pathname);
        }
    }, [pathname]);

    return {
        push,
    };
};
