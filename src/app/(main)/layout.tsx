"use client";

import { ReactNode, memo } from "react";

import GuestLayout from "@components/layouts/GuestLayout/GuestLayout";
import LoaderLayout from "@components/layouts/LoaderLayout/LoaderLayout";
import UserLayout from "@components/layouts/UserLayout/UserLayout";

import { useUserLoader } from "@hooks/client";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const userLoader = useUserLoader();

    const loaders = [userLoader];

    return (
        <LoaderLayout loaders={loaders}>
            {userLoader.isAuthenticated ? (
                <UserLayout>{children}</UserLayout>
            ) : (
                <GuestLayout>{children}</GuestLayout>
            )}
        </LoaderLayout>
    );
};

export default memo(Layout);
