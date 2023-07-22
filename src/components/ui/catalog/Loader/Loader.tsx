import { CSSProperties, FC, memo } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Loader.module.scss";

interface LoaderProps {
    palette?: ThemePalette;
}

const Loader: FC<LoaderProps> = ({ palette = "primary" }) => {
    return <span className={styles.loader} style={getStyle(palette)}></span>;
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("loader", palette),
});

export default memo(Loader);
