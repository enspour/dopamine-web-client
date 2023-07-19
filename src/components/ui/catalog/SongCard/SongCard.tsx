"use client";

import { CSSProperties, FC, memo, useRef } from "react";

import type { Song } from "@interfaces";

import SongCardControls from "./SongCardControls";
import SongCardImage from "./SongCardImage";
import SongCardInfo from "./SongCardInfo";

import { useIsHover } from "@hooks/client";

import { getThemePropertyValue } from "@utils";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./SongCard.module.scss";

interface SongCardProps {
    num: number;
    song: Song;
    palette?: ThemePalette;
}

const SongCard: FC<SongCardProps> = ({ num, song, palette = "primary" }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const isHover = useIsHover(cardRef);

    return (
        <div
            ref={cardRef}
            className={styles.card}
            style={getStyle(isHover, palette)}
        >
            <div className={styles.card__num}>{num}</div>

            <SongCardImage song={song} />

            <div className={styles.card__wrapper}>
                <SongCardInfo song={song} palette={palette} />

                <SongCardControls
                    song={song}
                    isHover={isHover}
                    palette={palette}
                />
            </div>
        </div>
    );
};

const getStyle = (isHover: boolean, palette: ThemePalette): CSSProperties => ({
    color: isHover
        ? getThemePropertyValue("color-hover", palette)
        : getThemePropertyValue("color", palette),
    backgroundColor: isHover
        ? getThemePropertyValue("bg-hover", palette)
        : getThemePropertyValue("bg", palette),
});

export default memo(SongCard);
