import { ReactNode } from "react";

import ClientLayout from "@components/layouts/ClientLayout/ClientLayout";
import ServerLayout from "@components/layouts/ServerLayout/ServerLayout";
import StoreLayout from "@components/layouts/StoreLayout/StoreLayout";

import { useInternationalization } from "@features/internationalization/server";
import { useThemeProperties } from "@features/theme/server";

interface LayoutProps {
    children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
    const themeProperties = await useThemeProperties();
    const internationalization = await useInternationalization();

    return (
        <StoreLayout>
            <ServerLayout themeProperties={themeProperties}>
                <ClientLayout internationalization={internationalization}>
                    {children}
                </ClientLayout>
            </ServerLayout>
        </StoreLayout>
    );
};

export default Layout;
