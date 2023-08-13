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

import styles from "./HorizontalList.module.scss";

export interface HorizontalListStyle {
    justifyContent?: "flex-start" | "flex-end" | "center";
}

export const initialStyle: HorizontalListStyle = {
    justifyContent: "flex-start",
};

interface HorizontalListProps {
    children: ReactNode | ReactNode[];
    currentId?: string;
    style?: HorizontalListStyle;
    palette?: ThemePalette;
}

const HorizontalList: FC<HorizontalListProps> = ({
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

export default memo(HorizontalList);
