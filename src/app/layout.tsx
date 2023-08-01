import { ReactNode } from "react";

import ClientLayout from "@components/layouts/ClientLayout/ClientLayout";
import ServerLayout from "@components/layouts/ServerLayout/ServerLayout";

import { useInterLoader } from "@features/inter/server";
import { useThemePropertiesLoader } from "@features/theme/server";

import { typedMemo } from "@utils";

interface LayoutProps {
    children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
    const [themeProperties, inter] = await Promise.all([
        useThemePropertiesLoader(),
        useInterLoader(),
    ]);

    return (
        <ServerLayout themeProperties={themeProperties}>
            <ClientLayout inter={inter}>{children}</ClientLayout>
        </ServerLayout>
    );
};

export default typedMemo(Layout);
