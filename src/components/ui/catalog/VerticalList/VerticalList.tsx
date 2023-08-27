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

import styles from "./VerticalList.module.scss";

export interface VerticalListStyle {
    justifyContent?: "flex-start" | "flex-end" | "center";
}

export const initialStyle: VerticalListStyle = {
    justifyContent: "flex-start",
};

interface VerticalListProps {
    children: ReactNode | ReactNode[];
    currentId?: string;
    style?: VerticalListStyle;
    palette?: ThemePalette;
}

const VerticalList: FC<VerticalListProps> = ({
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

    return <div className={styles.list}>{cloned}</div>;
};

export default memo(VerticalList);
