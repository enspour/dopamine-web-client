import { CSSProperties, FC, ReactNode, memo } from "react";

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
}

const Dropdown: FC<DropdownProps> = ({
    children,
    isOpen,
    location = "left",
    style = initialStyle,
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.dropdown} style={getStyle(style, location)}>
            {children}
        </div>
    );
};

const getStyle = (
    style: DropdownStyle,
    direction: DropdownLocation
): CSSProperties => {
    const { gap, ...properties } = Object.assign({}, initialStyle, style);

    return {
        ...properties,
        ...(direction === "left" ? { left: 0 } : { right: 0 }),
        bottom: `-${gap}`,
    };
};

export default memo(Dropdown);
