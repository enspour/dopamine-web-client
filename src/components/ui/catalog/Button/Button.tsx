"use client";

import {
    CSSProperties,
    FC,
    MouseEvent,
    ReactNode,
    memo,
    useEffect,
    useRef,
} from "react";

import { useIsHover } from "@hooks/client";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Button.module.scss";

interface ButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    width?: string;
    height?: string;
    disabled?: boolean;
    palette?: ThemePalette;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    width = "100%",
    height = "3.5rem",
    disabled = false,
    palette = "primary",
}) => {
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
            className={styles.button}
            style={getStyle(isHover, width, height, palette)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

const getStyle = (
    isHover: boolean,
    width: string,
    height: string,
    palette: ThemePalette
): CSSProperties => ({
    width,
    height,
    color: getThemePropertyValue("color", palette),
    backgroundColor: getThemePropertyValue("bg", palette),
    border: `.1rem solid ${
        isHover
            ? getThemePropertyValue("border-hover", palette)
            : getThemePropertyValue("border", palette)
    }`,
});

export default memo(Button);
