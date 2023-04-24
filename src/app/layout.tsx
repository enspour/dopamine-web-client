import { ReactNode, CSSProperties } from "react";

import InitializationLayout from "@components/layouts/InitializationLayout/InitializationLayout";

import { useThemeCookie } from "@hooks/useThemeCookie";

import { getThemeProperties } from "@utils";

import "@styles/reset.css";
import "@styles/globals.scss";

import "@api/mock";

import { Nunito } from "next/font/google";

const nunito = Nunito({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
    const theme = useThemeCookie();
    const properties = await getThemeProperties(theme);

    return (
        <html lang="en" style={getStyle(properties)}>
            <body className={nunito.className}>
                <InitializationLayout>{children}</InitializationLayout>
            </body>
        </html>
    );
};

const getStyle = (properties: any): CSSProperties =>
    ({
        ...properties,
    } as CSSProperties);

export default RootLayout;
