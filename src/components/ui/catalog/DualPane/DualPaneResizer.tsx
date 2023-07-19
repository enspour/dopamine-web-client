"use client";

import { CSSProperties, FC, MutableRefObject, memo, useRef } from "react";

import { useIsHover } from "@hooks/client";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./DualPane.module.scss";

interface DualPaneResizerProps {
    isMouseHold: MutableRefObject<boolean>;
    palette: ThemePalette;
}

const DualPaneResizer: FC<DualPaneResizerProps> = ({
    isMouseHold,
    palette,
}) => {
    const resizerRef = useRef<HTMLDivElement>(null);

    const isHover = useIsHover(resizerRef);

    const handleMouseDown = () => {
        isMouseHold.current = true;
    };

    return (
        <div
            ref={resizerRef}
            className={styles.pane__resizer}
            onMouseDown={handleMouseDown}
            style={getStyle(isHover, palette)}
        >
            <div style={getColor(isHover, palette)}></div>
        </div>
    );
};

const getStyle = (isHover: boolean, palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg-hover", palette),
});

const getColor = (isHover: boolean, palette: ThemePalette): CSSProperties => ({
    backgroundColor: isHover
        ? getThemePropertyValue("color-hover", palette)
        : getThemePropertyValue("color", palette),
});

export default memo(DualPaneResizer);
