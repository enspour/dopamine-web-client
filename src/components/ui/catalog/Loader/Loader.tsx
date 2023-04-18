import { memo, FC, CSSProperties } from "react";

import type { Palette } from "@services/Theme.service";

import { getProperty } from "@utils";

import styles from "./Loader.module.scss";

interface LoaderProps {
    palette?: Palette;
}

const Loader: FC<LoaderProps> = ({ palette = "primary" }) => {
    return <span className={styles.loader} style={getStyle(palette)}></span>;
};

const getStyle = (palette: Palette): CSSProperties => ({
    color: getProperty("loader", palette),
});

export default memo(Loader);
