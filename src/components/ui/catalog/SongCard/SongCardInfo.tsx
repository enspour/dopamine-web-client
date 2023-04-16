import { memo, FC, CSSProperties } from "react";

import type { Song } from "@interfaces";

import type { Palette } from "@services/Theme.service";

import { getProperty } from "@utils";

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
    backgroundColor: getProperty("color", palette),
});

const getLinkStyle = (palette: Palette): CSSProperties => ({
    color: getProperty("link", palette),
});

export default memo(SongCardInfo);
