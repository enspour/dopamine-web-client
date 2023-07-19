import { ReactNode } from "react";

import ClientLayout from "@components/layouts/ClientLayout/ClientLayout";
import ServerLayout from "@components/layouts/ServerLayout/ServerLayout";

import { useThemeName } from "@hooks/server";

import { getThemeProperties } from "@services/Theme.service";

interface LayoutProps {
    children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
    const name = useThemeName();
    const properties = await getThemeProperties(name);

    return (
        <ServerLayout themeProperties={properties}>
            <ClientLayout>{children}</ClientLayout>
        </ServerLayout>
    );
};

export default Layout;
