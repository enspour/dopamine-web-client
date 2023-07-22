"use client";

import {
    CSSProperties,
    MouseEvent,
    ReactNode,
    memo,
    useEffect,
    useRef,
} from "react";

import { HorizontalMenuStyle, initialStyle } from "./HorizontalMenu";

import { useIsHover } from "@hooks/client";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuButtonProps<T extends string> {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLElement>) => void;
    name?: T;
}

interface HorizontalMenuButtonExtendedProps<T extends string>
    extends HorizontalMenuButtonProps<T> {
    isActive?: boolean;
    style?: HorizontalMenuStyle;
    palette?: ThemePalette;
}

function HorizontalMenuButton<T extends string>(
    props: HorizontalMenuButtonProps<T>
) {
    const {
        children,
        onClick,
        isActive = false,
        style = initialStyle,
        palette = "primary",
    } = props as HorizontalMenuButtonExtendedProps<T>;

    const buttonRef = useRef<HTMLButtonElement>(null);

    const isHover = useIsHover(buttonRef);

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            button.style.setProperty(
                "--border-focus",
                getThemePropertyValue("border-focus", palette)
            );
        }
    }, []); //eslint-disable-line

    return (
        <button
            ref={buttonRef}
            className={styles.menu__button}
            onClick={onClick}
            style={getStyle(isHover, isActive, style, palette)}
        >
            {children}
        </button>
    );
}

const getStyle = (
    isHover: boolean,
    isActive: boolean,
    style: HorizontalMenuStyle,
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

    border: `.1rem solid ${
        isHover || isActive
            ? getThemePropertyValue("border-hover", palette)
            : "transparent"
    }`,
});

export default memo(HorizontalMenuButton);
