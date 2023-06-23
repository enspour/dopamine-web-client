import { CSSProperties, FC, ReactNode, memo } from "react";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./Dropdown.module.scss";

type DropdownLocation = "right" | "left";

interface DropdownStyle {
    gap?: string;
}

const initialStyle: DropdownStyle = {
    gap: "0rem",
};

interface DropdownProps {
    children: ReactNode;
    isOpen: boolean;
    location?: DropdownLocation;
    style?: DropdownStyle;
    palette?: ThemePalette;
}

const Dropdown: FC<DropdownProps> = ({
    children,
    isOpen,
    location = "left",
    style = initialStyle,
    palette = "primary",
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={styles.dropdown}
            style={getStyle(style, location, palette)}
        >
            {children}
        </div>
    );
};

const getStyle = (
    style: DropdownStyle,
    direction: DropdownLocation,
    palette: ThemePalette
): CSSProperties => {
    const properties = Object.assign({}, initialStyle, style);

    return {
        ...(direction === "left" ? { left: 0 } : { right: 0 }),
        bottom: `-${properties.gap}`,
    };
};

export default memo(Dropdown);
