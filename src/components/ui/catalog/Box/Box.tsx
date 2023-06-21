import {
    CSSProperties,
    FC,
    ReactNode,
    RefObject,
    memo,
    useEffect,
    useRef,
} from "react";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./Box.module.scss";

interface BoxProps {
    children: ReactNode | ReactNode[];

    boxRef?: RefObject<HTMLDivElement>;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    padding?: string;

    direction?: "column" | "row";
    gap?: string;

    palette?: ThemePalette;
}

const Box: FC<BoxProps> = ({
    children,

    boxRef = useRef<HTMLDivElement>(null),

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",

    padding = "0rem",

    direction = "column",
    gap = "0rem",

    palette = "primary",
}) => {
    useEffect(() => {
        const box = boxRef.current;

        if (box) {
            box.style.setProperty(
                "--thumb",
                getThemePropertyValue("scroll-thumb")
            );
            box.style.setProperty(
                "--thumb-hover",
                getThemePropertyValue("scroll-thumb-hover")
            );
        }
    }, []);

    return (
        <div
            ref={boxRef}
            className={styles.box}
            style={getStyle(
                height,
                maxHeight,
                minHeight,

                width,
                maxWidth,
                minWidth,

                padding,

                direction,
                gap,

                palette
            )}
        >
            {children}
        </div>
    );
};

const getStyle = (
    height: string,
    maxHeight: string,
    minHeight: string,

    width: string,
    maxWidth: string,
    minWidth: string,

    padding: string,

    direction: "column" | "row",
    gap: string,

    palette: ThemePalette
): CSSProperties => ({
    height,
    maxHeight,
    minHeight,

    width,
    maxWidth,
    minWidth,

    padding,

    flexDirection: direction,
    gap,

    boxShadow: `0rem 0rem 1rem .4rem ${getThemePropertyValue(
        "shadow",
        palette
    )}`,
    backgroundColor: getThemePropertyValue("bg", palette),
});

export default memo(Box);
