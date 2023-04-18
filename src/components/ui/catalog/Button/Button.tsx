import {
    useRef,
    useEffect,
    memo,
    FC,
    ReactNode,
    CSSProperties,
    MouseEvent,
} from "react";

import { useIsHover } from "@hooks";

import type { Palette } from "@services/Theme.service";

import { getProperty } from "@utils";

import styles from "./Button.module.scss";

interface ButtonProps {
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    palette?: Palette;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    palette = "primary",
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const isHover = useIsHover(buttonRef);

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            button.style.setProperty(
                "--border-focus",
                getProperty("border-focus", palette)
            );
        }
    }, []); //eslint-disable-line

    return (
        <button
            ref={buttonRef}
            className={styles.button}
            style={getStyle(isHover, palette)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const getStyle = (isHover: boolean, palette: Palette): CSSProperties => ({
    backgroundColor: isHover
        ? getProperty("bg-hover", palette)
        : getProperty("bg", palette),
    color: isHover
        ? getProperty("color-hover", palette)
        : getProperty("color", palette),
    border: `.1rem solid ${
        isHover
            ? getProperty("border-hover", palette)
            : getProperty("border", palette)
    }`,
});

export default memo(Button);
