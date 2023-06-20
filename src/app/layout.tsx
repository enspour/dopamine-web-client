import { ReactNode } from "react";

import ClientLayout from "@components/layouts/ClientLayout/ClientLayout";
import ServerLayout from "@components/layouts/ServerLayout/ServerLayout";

import { useThemeCookie } from "@hooks/server";

import { getThemeProperties } from "@utils";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
    const theme = useThemeCookie();
    const themeProperties = await getThemeProperties(theme);

    return (
        <ServerLayout themeProperties={themeProperties}>
            <ClientLayout>{children}</ClientLayout>
        </ServerLayout>
    );
};

export default RootLayout;
