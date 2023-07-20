import { ReactNode } from "react";

import ClientLayout from "@components/layouts/ClientLayout/ClientLayout";
import ServerLayout from "@components/layouts/ServerLayout/ServerLayout";

import { useThemeProperties } from "@features/theme/server";

interface LayoutProps {
    children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
    const properties = await useThemeProperties();

    return (
        <ServerLayout themeProperties={properties}>
            <ClientLayout>{children}</ClientLayout>
        </ServerLayout>
    );
};

export default Layout;
