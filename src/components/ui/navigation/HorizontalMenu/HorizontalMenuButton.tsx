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

import { HorizontalMenuStyle } from "./HorizontalMenu";

import { useIsHover } from "@hooks/client";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuButtonProps {
    children: ReactNode | ReactNode[];
    id?: string;
    onClick: (id: string, e: MouseEvent<HTMLElement>) => void;
}

interface HorizontalMenuButtonExtendedProps extends HorizontalMenuButtonProps {
    isActive: boolean;
    style: HorizontalMenuStyle;
    palette: ThemePalette;
}

const HorizontalMenuButton: FC<HorizontalMenuButtonProps> = (props) => {
    const {
        children,
        id = "",
        onClick,
        isActive,
        style,
        palette,
    } = props as HorizontalMenuButtonExtendedProps;

    const buttonRef = useRef<HTMLButtonElement>(null);

    const isHover = useIsHover(buttonRef);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        onClick(id, e);
    };

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
            onClick={handleClick}
            style={getStyle(isHover, isActive, style, palette)}
        >
            {children}
        </button>
    );
};

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

export default memo(HorizontalMenuButton);
