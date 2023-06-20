import { CSSProperties, FC, ReactNode, memo } from "react";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./Dropdown.module.scss";

type DropdownLocation = "right" | "left";

interface DropProps {
    children: ReactNode;
    isOpen: boolean;
    location?: DropdownLocation;
    palette?: ThemePalette;
}

const Dropdown: FC<DropProps> = ({
    children,
    isOpen,
    location = "left",
    palette = "primary",
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.drop} style={getStyle(location, palette)}>
            {children}
        </div>
    );
};

const getStyle = (
    direction: DropdownLocation,
    palette: ThemePalette
): CSSProperties => ({
    ...(direction === "left" ? { left: 0 } : { right: 0 }),
});

export default memo(Dropdown);
