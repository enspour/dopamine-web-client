import { CSSProperties, ReactNode, memo } from "react";

import "@styles/globals.scss";
import "@styles/reset.css";

import { Nunito } from "next/font/google";

const nunito = Nunito({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

interface ServerLayoutProps {
    children: ReactNode;
    themeProperties: any;
}

const ServerLayout = ({ children, themeProperties }: ServerLayoutProps) => {
    return (
        <html lang="en" style={getStyle(themeProperties)}>
            <body className={nunito.className}>{children}</body>
        </html>
    );
};

const getStyle = (properties: any): CSSProperties =>
    ({
        ...properties,
    } as CSSProperties);

export default memo(ServerLayout);
