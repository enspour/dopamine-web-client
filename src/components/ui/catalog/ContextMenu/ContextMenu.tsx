"use client";

import {
    CSSProperties,
    FC,
    MouseEvent,
    ReactNode,
    cloneElement,
    isValidElement,
    memo,
    useRef,
} from "react";

import { useOutsideClickAlerter } from "@hooks/client";

import styles from "./ContextMenu.module.scss";

interface ContextMenuStyle {
    gap?: string;
    location?: "right" | "left";
}

const initialStyle: ContextMenuStyle = {
    gap: "0rem",
    location: "left",
};

export type ContextMenuElementProps = {
    close: () => void;
};

interface ContextMenuProps {
    children: [ReactNode, ReactNode];
    style?: ContextMenuStyle;
}

const ContextMenu: FC<ContextMenuProps> = ({
    children,
    style = initialStyle,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useOutsideClickAlerter(containerRef);

    const toggle = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        setIsOpen((prev) => !prev);
    };

    const close = () => {
        setIsOpen(false);
    };

    const menu =
        isValidElement(children[1]) &&
        cloneElement(children[1], { close } as any);

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.button} onClick={toggle}>
                {children[0]}
            </div>

            {isOpen && (
                <div className={styles.menu} style={getStyle(style)}>
                    {menu}
                </div>
            )}
        </div>
    );
};

const getStyle = (style: ContextMenuStyle): CSSProperties => {
    const { gap, location, ...properties } = Object.assign(
        {},
        initialStyle,
        style
    );

    return {
        ...properties,
        ...(location === "left" ? { left: 0 } : { right: 0 }),
        bottom: `-${gap}`,
    };
};

export default memo(ContextMenu);
