import { memo, FC, CSSProperties } from "react";

import type { Palette } from "@services/Theme.service";

import { getThemeValue } from "@utils";

import styles from "./Loader.module.scss";

interface LoaderProps {
    palette?: Palette;
}

const Loader: FC<LoaderProps> = ({ palette = "primary" }) => {
    return <span className={styles.loader} style={getStyle(palette)}></span>;
};

const getStyle = (palette: Palette): CSSProperties => ({
    color: getThemeValue("loader", palette),
});

export default memo(Loader);
