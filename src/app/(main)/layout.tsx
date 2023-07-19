"use client";

import { ReactNode, useState } from "react";

import GuestLayout from "@components/layouts/GuestLayout/GuestLayout";
import UserLayout from "@components/layouts/UserLayout/UserLayout";
import UserLoaderLayout from "@components/layouts/UserLoaderLayout/UserLoaderLayout";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const callback = (success: boolean, done: () => void): void => {
        if (success) {
            setIsAuthenticated(true);
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

export default Layout;
