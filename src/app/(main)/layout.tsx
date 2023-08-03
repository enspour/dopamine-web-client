"use client";

import { ReactNode, memo } from "react";

import GuestLayout from "@components/layouts/GuestLayout/GuestLayout";
import LoaderLayout from "@components/layouts/LoaderLayout/LoaderLayout";
import UserLayout from "@components/layouts/UserLayout/UserLayout";

import { useIsAuthenticated } from "@features/users/client";

import FollowingsRunner from "@features/users/components/runners/FollowingsRunner";
import UserRunner from "@features/users/components/runners/UserRunner";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const isAuthenticated = useIsAuthenticated();

    const runners = [UserRunner, FollowingsRunner];

    return (
        <LoaderLayout runners={runners}>
            {isAuthenticated ? (
                <UserLayout>{children}</UserLayout>
            ) : (
                <GuestLayout>{children}</GuestLayout>
            )}
        </LoaderLayout>
    );
};

export default memo(Layout);
