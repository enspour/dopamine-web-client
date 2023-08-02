import { usePathname } from "next/navigation";
import { useState } from "react";

import { type Loader } from "@components/layouts/LoaderLayout/LoaderLayout";

import { useCustomRouter } from "@hooks/client";

import { useUser } from "@features/users/client";

import { isPrivateNavigation } from "@interfaces";

export type UseUserLoaderResult = Loader & { isAuthenticated: boolean };

export const useUserLoader = (): UseUserLoaderResult => {
    const message = "User Loading...";

    const pathname = usePathname();
    const router = useCustomRouter();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const { update } = useUser();

    const run = async (): Promise<void> => {
        const statusCode = await update();

        if (statusCode === 200) {
            return setIsAuthenticated(true);
        }

        if (isPrivateNavigation(pathname)) {
            await router.push("/login");
        }
    };

    return { run, message, isAuthenticated };
};
