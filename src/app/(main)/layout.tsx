"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, memo, useState } from "react";

import GuestLayout from "@components/layouts/GuestLayout/GuestLayout";
import UserLayout from "@components/layouts/UserLayout/UserLayout";
import UserLoaderLayout from "@components/layouts/UserLoaderLayout/UserLoaderLayout";

const privatePathnames = ["/feed", "/store"];

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const callback = (success: boolean, done: () => void): void => {
        if (success) {
            setIsAuthenticated(true);
        } else {
            if (privatePathnames.includes(pathname)) {
                return router.push("/login");
            }
        }

        done();
    };

    return (
        <UserLoaderLayout callback={callback}>
            {isAuthenticated ? (
                <UserLayout>{children}</UserLayout>
            ) : (
                <GuestLayout>{children}</GuestLayout>
            )}
        </UserLoaderLayout>
    );
};

export default memo(Layout);
