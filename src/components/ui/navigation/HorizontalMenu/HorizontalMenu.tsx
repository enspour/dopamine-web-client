"use client";

import { Children, ReactNode, cloneElement, isValidElement, memo } from "react";

import { type ThemePalette } from "@features/theme";

import styles from "./HorizontalMenu.module.scss";

export interface HorizontalMenuStyle {
    justifyContent?: "flex-start" | "flex-end" | "center";
}

export const initialStyle: HorizontalMenuStyle = {
    justifyContent: "center",
};

interface HorizontalMenuProps<T extends string> {
    children: ReactNode | ReactNode[];
    currentMenu?: T;
    style?: HorizontalMenuStyle;
    palette?: ThemePalette;
}

function HorizontalMenu<T extends string>({
    children,
    currentMenu,
    style,
    palette = "primary",
}: HorizontalMenuProps<T>) {
    const cloned = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                isActive: currentMenu && currentMenu === child.props.name,
                style: Object.assign({}, initialStyle, style),
                palette,
            } as any);
        }

        return child;
    });

    return <div className={styles.menu}>{cloned}</div>;
}

export default memo(HorizontalMenu);
