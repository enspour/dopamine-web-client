import { memo, FC, CSSProperties } from "react";

import type { Song } from "@interfaces";

import type { Palette } from "@services/Theme.service";

import { getThemeValue } from "@utils";

import styles from "./SongCard.module.scss";

interface SongCardInfoProps {
    song: Song;
    palette?: Palette;
}

const SongCardInfo: FC<SongCardInfoProps> = ({ song, palette = "primary" }) => {
    return (
        <div className={styles.card__info}>
            <div>{song.name}</div>
            <div className={styles.card__dash} style={getDashStyle(palette)} />
            <div style={getLinkStyle(palette)}>{song.owner.name}</div>
        </div>
    );
};

const getDashStyle = (palette: Palette): CSSProperties => ({
    backgroundColor: getThemeValue("color", palette),
});

const getLinkStyle = (palette: Palette): CSSProperties => ({
    color: getThemeValue("link", palette),
});

export default memo(SongCardInfo);
