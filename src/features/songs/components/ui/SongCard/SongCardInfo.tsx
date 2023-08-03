import { CSSProperties, FC, memo } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import type { Song } from "@features/songs";

import styles from "./SongCard.module.scss";

interface SongCardInfoProps {
    song: Song;
    palette?: ThemePalette;
}

const SongCardInfo: FC<SongCardInfoProps> = ({ song, palette = "primary" }) => {
    return (
        <div className={styles.card__info}>
            <div>{song.name}</div>

            <div
                className={styles.card__info__dash}
                style={getDashStyle(palette)}
            />

            <div style={getLinkStyle(palette)}>{song.owner.name}</div>
        </div>
    );
};

const getDashStyle = (palette: ThemePalette): CSSProperties => ({
    backgroundColor: getThemePropertyValue("color", palette),
});

const getLinkStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("link", palette),
});

export default memo(SongCardInfo);
