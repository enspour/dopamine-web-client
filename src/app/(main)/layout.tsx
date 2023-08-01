"use client";

import { ReactNode, memo } from "react";

import GuestLayout from "@components/layouts/GuestLayout/GuestLayout";
import LoaderLayout from "@components/layouts/LoaderLayout/LoaderLayout";
import UserLayout from "@components/layouts/UserLayout/UserLayout";

import { useUserInitializer } from "@features/users/client";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { loader, isAuthenticated } = useUserInitializer();

    return (
        <LoaderLayout loader={loader}>
            {isAuthenticated ? (
                <UserLayout>{children}</UserLayout>
            ) : (
                <GuestLayout>{children}</GuestLayout>
            )}
        </LoaderLayout>
    );
};

export default memo(Layout);
