import {
    useRef,
    useEffect,
    memo,
    FC,
    ReactNode,
    CSSProperties,
    MouseEvent,
} from "react";

import { useIsHover } from "@hooks/useIsHover";

import type { Palette } from "@services/Theme.service";

import { getThemeValue } from "@utils";

import styles from "./Button.module.scss";

interface ButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    width?: string;
    disabled?: boolean;
    palette?: Palette;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    width = "100%",
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
                getThemeValue("border-focus", palette)
            );
        }
    }, []); //eslint-disable-line

    return (
        <button
            ref={buttonRef}
            className={styles.button}
            style={getStyle(isHover, width, palette)}
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
    palette: Palette
): CSSProperties => ({
    width,
    color: getThemeValue("color", palette),
    backgroundColor: getThemeValue("bg", palette),
    border: `.1rem solid ${
        isHover
            ? getThemeValue("border-hover", palette)
            : getThemeValue("border", palette)
    }`,
});

export default memo(Button);
