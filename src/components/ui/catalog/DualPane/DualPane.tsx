"use client";

import { FC, MouseEvent, ReactNode, memo, useRef, useState } from "react";

import DualPaneResizer from "./DualPaneResizer";
import DualPaneWindow from "./DualPaneWindow";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./DualPane.module.scss";

interface DualPaneStyle {
    window?: {
        minWidth?: string;
    };
}

const initialStyle: DualPaneStyle = {
    window: {
        minWidth: "25rem",
    },
};

interface DualPaneProps {
    children: [ReactNode, ReactNode];
    style?: DualPaneStyle;
    palette?: ThemePalette;
}

const DualPane: FC<DualPaneProps> = ({
    children,
    style = initialStyle,
    palette = "primary",
}) => {
    const { window } = Object.assign({}, initialStyle, style);

    const paneRef = useRef<HTMLDivElement>(null);

    const [percent, setPercent] = useState(20);

    const isMouseHold = useRef(false);

    const handleMouseUp = () => {
        isMouseHold.current = false;
    };

    const handleMouseLeave = () => {
        isMouseHold.current = false;
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!paneRef.current || !isMouseHold.current) {
            return;
        }

        const pane = paneRef.current;

        const width = pane.offsetWidth;
        const localX = e.clientX - e.currentTarget.offsetLeft;

        if (0 < localX && localX < width) {
            const percent = (localX / width) * 100;
            setPercent(percent);
        }
    };

    return (
        <div
            ref={paneRef}
            className={styles.pane}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <DualPaneWindow style={{ ...window, width: `${percent}%` }}>
                {children[0]}
            </DualPaneWindow>

            <DualPaneResizer isMouseHold={isMouseHold} palette={palette} />

            <DualPaneWindow style={{ ...window, width: `${100 - percent}%` }}>
                {children[1]}
            </DualPaneWindow>
        </div>
    );
};

export default memo(DualPane);
