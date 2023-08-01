import { usePathname } from "next/navigation";
import { useState } from "react";

import { useCustomRouter } from "@hooks/client";

import { useUser } from "./useUser";

import { SessionsApi } from "@api";

const privatePathnames = ["/feed", "/store"];

export const useUserInitializer = () => {
    const pathname = usePathname();
    const router = useCustomRouter();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const { update } = useUser();

    const loader = async (): Promise<void> => {
        const statusCode = await update();

        if (statusCode === 200) {
            return setIsAuthenticated(true);
        }

        if (statusCode === 401) {
            const response = await SessionsApi.refresh();

            if (response.statusCode === 200) {
                const statusCode = await update();

                if (statusCode === 200) {
                    return setIsAuthenticated(true);
                }
            }
        }

        if (privatePathnames.includes(pathname)) {
            await router.push("/login");
        }
    };

    return { loader, isAuthenticated };
};
