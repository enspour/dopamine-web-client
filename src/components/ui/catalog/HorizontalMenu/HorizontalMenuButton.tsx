import {
    CSSProperties,
    FC,
    MouseEvent,
    ReactNode,
    memo,
    useEffect,
    useRef,
} from "react";

import {
    HorizontalMenuItemOptions,
    initialItemOptions,
} from "./HorizontalMenu";

import { useIsHover } from "@hooks/client";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLElement>) => void;
}

interface HorizontalMenuButtonExtendedProps extends HorizontalMenuButtonProps {
    options?: HorizontalMenuItemOptions;
    isActive?: boolean;
    palette?: ThemePalette;
}

const HorizontalMenuButton: FC<HorizontalMenuButtonProps> = ({
    children,
    onClick,
    options = initialItemOptions,
    isActive = false,
    palette = "primary",
}: HorizontalMenuButtonExtendedProps) => {
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
            style={getStyle(isHover, isActive, options, palette)}
        >
            {children}
        </button>
    );
};

const getStyle = (
    isHover: boolean,
    isActive: boolean,
    options: HorizontalMenuItemOptions,
    palette: ThemePalette
): CSSProperties => ({
    ...options,
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
