import { CSSProperties, MouseEvent, ReactNode, memo, useRef } from "react";

import { useIsHover } from "@hooks/client";

import { ThemePalette, getThemePropertyValue } from "@features/theme";

import styles from "./Select.module.scss";

interface SelectItemProps {
    children: ReactNode | ReactNode[];
    id: string;
    onClick: (id: string, e: MouseEvent<HTMLElement>) => void;
}

interface SelectItemExtendedProps extends SelectItemProps {
    isActive: boolean;
    palette: ThemePalette;
}

const SelectItem = (props: SelectItemProps) => {
    const { children, id, onClick, isActive, palette } =
        props as SelectItemExtendedProps;

    const itemRef = useRef(null);

    const isHover = useIsHover(itemRef);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        onClick(id, e);
    };

    return (
        <div
            ref={itemRef}
            className={styles.select__item}
            onClick={handleClick}
            style={getStyle(isActive, isHover, palette)}
        >
            {children}
        </div>
    );
};

const getStyle = (
    isHover: boolean,
    isActive: boolean,
    palette: ThemePalette
): CSSProperties => ({
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

export default memo(SelectItem);
