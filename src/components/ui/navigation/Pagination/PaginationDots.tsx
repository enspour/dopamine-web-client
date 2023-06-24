import { CSSProperties, FC } from "react";

import type { ThemePalette } from "@services/Theme.service";

import { getThemePropertyValue } from "@utils";

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

export default PaginationDots;
