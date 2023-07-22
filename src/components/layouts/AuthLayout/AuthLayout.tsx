import { CSSProperties, FC, memo, ReactNode } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

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

export default memo(AuthLayout);
