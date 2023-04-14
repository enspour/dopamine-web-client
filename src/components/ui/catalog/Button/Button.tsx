import { useRef, memo, FC, ReactNode, CSSProperties } from "react";

import { useIsHover } from "@hooks";

import { Palette } from "@services/Theme.service";

import { getProperty } from "@utils";

import styles from "./Button.module.scss";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    palette?: Palette;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    palette = "primary",
}) => {
    const buttonRef = useRef(null);

    const isHover = useIsHover(buttonRef);

    return (
        <div
            ref={buttonRef}
            className={styles.button}
            style={getStyle(isHover, palette)}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

const getStyle = (isHover: boolean, palette: Palette): CSSProperties => ({
    backgroundColor: isHover
        ? getProperty("bg-hover", palette)
        : getProperty("bg", palette),
    color: isHover
        ? getProperty("color-hover", palette)
        : getProperty("color", palette),
    border: `.1rem solid ${getProperty("border-color", palette)}`,
});

export default memo(Button);
