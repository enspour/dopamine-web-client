import { CSSProperties, FC, ReactNode } from "react";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./AuthLayout.module.scss";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <main className={styles.main} style={getStyle("secondary")}>
            {children}
        </main>
    );
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
});

export default AuthLayout;
