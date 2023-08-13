"use client";

import { CSSProperties, FC, MouseEvent, ReactNode, memo, useRef } from "react";

import { HorizontalListStyle } from "./HorizontalList";

import { useIsHover } from "@hooks/client";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./HorizontalList.module.scss";

interface HorizontalListElementProps {
    children: ReactNode | ReactNode[];
    id?: string;
    onClick: (id: string, e: MouseEvent<HTMLElement>) => void;
}

interface HorizontalListElementExtendedProps
    extends HorizontalListElementProps {
    isActive: boolean;
    style: HorizontalListStyle;
    palette: ThemePalette;
}

const HorizontalListElement: FC<HorizontalListElementProps> = (props) => {
    const {
        children,
        id = "",
        onClick,
        isActive,
        style,
        palette,
    } = props as HorizontalListElementExtendedProps;

    const elementRef = useRef<HTMLDivElement>(null);

    const isHover = useIsHover(elementRef);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        onClick(id, e);
    };

    return (
        <div
            ref={elementRef}
            className={styles.list__element}
            onClick={handleClick}
            style={getStyle(isHover, isActive, style, palette)}
        >
            {children}
        </div>
    );
};

const getStyle = (
    isHover: boolean,
    isActive: boolean,
    style: HorizontalListStyle,
    palette: ThemePalette
): CSSProperties => ({
    ...style,
    color:
        isHover || isActive
            ? getThemePropertyValue("color-hover", palette)
            : getThemePropertyValue("color", palette),

    backgroundColor:
        isHover || isActive
            ? getThemePropertyValue("bg-hover", palette)
            : getThemePropertyValue("bg", palette),

    borderTop: `.1rem solid ${
        isHover || isActive
            ? getThemePropertyValue("border-hover", palette)
            : "transparent"
    }`,

    borderBottom: `.1rem solid ${
        isHover || isActive
            ? getThemePropertyValue("border-hover", palette)
            : "transparent"
    }`,
});

export default memo(HorizontalListElement);
