"use client";

import {
    CSSProperties,
    FC,
    ReactNode,
    RefObject,
    memo,
    useEffect,
    useRef,
} from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Box.module.scss";

interface BoxStyle {
    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    padding?: string;
    margin?: string;

    borderRadius?: string;

    flexDirection?: "column" | "row";
    gap?: string;

    overflow?: "auto" | "hidden";
}

const initialStyle: BoxStyle = {
    height: "100%",
    maxHeight: "inherit",
    minHeight: "inherit",

    width: "100%",
    maxWidth: "inherit",
    minWidth: "inherit",

    padding: "0rem",
    margin: "0rem",

    borderRadius: "2rem",

    flexDirection: "column",
    gap: "0rem",

    overflow: "auto",
};

interface BoxProps {
    children: ReactNode | ReactNode[];
    boxRef?: RefObject<HTMLDivElement>;
    style?: BoxStyle;
    palette?: ThemePalette;
}

const Box: FC<BoxProps> = ({
    children,
    boxRef = useRef<HTMLDivElement>(null),
    style = initialStyle,
    palette = "primary",
}) => {
    useEffect(() => {
        const box = boxRef.current;

        if (box) {
            box.style.setProperty(
                "--thumb",
                getThemePropertyValue("scroll-thumb", palette)
            );
            box.style.setProperty(
                "--thumb-hover",
                getThemePropertyValue("scroll-thumb-hover", palette)
            );
        }
    }, []);

    return (
        <div
            ref={boxRef}
            className={styles.box}
            style={getStyle(style, palette)}
        >
            {children}
        </div>
    );
};

const getStyle = (style: BoxStyle, palette: ThemePalette): CSSProperties => ({
    ...Object.assign({}, initialStyle, style),
    boxShadow: `0rem 0rem .8rem .2rem ${getThemePropertyValue(
        "shadow",
        palette
    )}`,
    backgroundColor: getThemePropertyValue("bg", palette),
});

export default memo(Box);
