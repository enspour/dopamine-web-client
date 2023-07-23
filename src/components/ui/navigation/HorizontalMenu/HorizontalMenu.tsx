"use client";

import {
    Children,
    FC,
    ReactNode,
    cloneElement,
    isValidElement,
    memo,
} from "react";

import { type ThemePalette } from "@features/theme";

import styles from "./HorizontalMenu.module.scss";

export interface HorizontalMenuStyle {
    justifyContent?: "flex-start" | "flex-end" | "center";
}

export const initialStyle: HorizontalMenuStyle = {
    justifyContent: "flex-start",
};

interface HorizontalMenuProps {
    children: ReactNode | ReactNode[];
    currentId?: string;
    style?: HorizontalMenuStyle;
    palette?: ThemePalette;
}

const HorizontalMenu: FC<HorizontalMenuProps> = ({
    children,
    currentId,
    style,
    palette = "primary",
}) => {
    const cloned = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                isActive: currentId && currentId === child.props.id,
                style: Object.assign({}, initialStyle, style),
                palette,
            } as any);
        }

        return child;
    });

    return <div className={styles.menu}>{cloned}</div>;
};

export default memo(HorizontalMenu);
