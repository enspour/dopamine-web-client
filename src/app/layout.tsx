import { ReactNode } from "react";

import ClientLayout from "@components/layouts/ClientLayout/ClientLayout";
import ServerLayout from "@components/layouts/ServerLayout/ServerLayout";

import { useThemeName } from "@hooks/server";

import { getThemeProperties } from "@services/Theme.service";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
    const name = useThemeName();
    const themeProperties = await getThemeProperties(name);

    return (
        <ServerLayout themeProperties={themeProperties}>
            <ClientLayout>{children}</ClientLayout>
        </ServerLayout>
    );
};

export default RootLayout;
