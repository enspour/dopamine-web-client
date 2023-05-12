import { CSSProperties, FC, memo } from "react";

import type { ThemePalette } from "@services/Theme.service";

import { getThemeValue } from "@utils";

import styles from "./Loader.module.scss";

interface LoaderProps {
    palette?: ThemePalette;
}

const Loader: FC<LoaderProps> = ({ palette = "primary" }) => {
    return <span className={styles.loader} style={getStyle(palette)}></span>;
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemeValue("loader", palette),
});

export default memo(Loader);
