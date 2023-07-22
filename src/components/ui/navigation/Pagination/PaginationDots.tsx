import { CSSProperties, FC, memo } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Pagination.module.scss";

interface PaginationDotsProps {
    palette: ThemePalette;
}

const PaginationDots: FC<PaginationDotsProps> = ({ palette }) => {
    return (
        <div className={styles.pagination__dots} style={getStyle(palette)}>
            ...
        </div>
    );
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("bg", palette),
    color: getThemePropertyValue("color", palette),
});

export default memo(PaginationDots);
