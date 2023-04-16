import { memo, useEffect, useRef, ReactNode, FC, CSSProperties } from "react";

import type { Palette } from "@services/Theme.service";

import { getProperty } from "@utils";

import styles from "./Box.module.scss";

interface BoxProps {
    children: ReactNode;

    height?: string;
    maxHeight?: string;
    minHeight?: string;

    width?: string;
    maxWidth?: string;
    minWidth?: string;

    palette?: Palette;
}

const Box: FC<BoxProps> = ({
    children,

    height = "100%",
    maxHeight = "inherit",
    minHeight = "inherit",

    width = "100%",
    maxWidth = "inherit",
    minWidth = "inherit",

    palette = "primary",
}) => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const box = boxRef.current;

        if (box) {
            box.style.setProperty("--thumb", getProperty("scroll-thumb"));
            box.style.setProperty(
                "--thumb-hover",
                getProperty("scroll-thumb-hover")
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

    palette: Palette
): CSSProperties => ({
    height,
    maxHeight,
    minHeight,

    width,
    maxWidth,
    minWidth,

    boxShadow: `0px 0px 10px 4px ${getProperty("shadow", palette)}`,
    backgroundColor: getProperty("bg", palette),
});

export default memo(Box);
