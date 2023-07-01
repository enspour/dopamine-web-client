import { CSSProperties, FC, memo, useRef } from "react";

import { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

import { useIsHover } from "@hooks/client";

import styles from "./Pagination.module.scss";

interface PaginationNumberProps {
    page: number;
    open: (page: number) => void;
    isActive?: boolean;
    palette?: ThemePalette;
}

const PaginationNumber: FC<PaginationNumberProps> = ({
    page,
    open,
    isActive = false,
    palette = "primary",
}) => {
    const numberRef = useRef(null);

    const isHover = useIsHover(numberRef);

    return (
        <div
            ref={numberRef}
            className={styles.pagination__number}
            style={getStyle(isActive, isHover, palette)}
            onClick={() => open(page)}
        >
            {page}
        </div>
    );
};

const getStyle = (
    isActive: boolean,
    isHover: boolean,
    palette: ThemePalette
): CSSProperties => ({
    backgroundColor:
        isActive || isHover
            ? getThemePropertyValue("bg-active", palette)
            : getThemePropertyValue("bg", palette),
    color:
        isActive || isHover
            ? getThemePropertyValue("color-active", palette)
            : getThemePropertyValue("color", palette),

    border: `0.1rem solid ${
        isActive || isHover
            ? getThemePropertyValue("border-hover", palette)
            : "transparent"
    }`,
});

export default memo(PaginationNumber);
