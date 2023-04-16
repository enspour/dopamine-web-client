import { useRef, FC, CSSProperties, memo } from "react";

import type { Song } from "@interfaces";

import SongCardInfo from "./SongCardInfo";
import SongCardImage from "./SongCardImage";
import SongCardControls from "./SongCardControls";

import { useIsHover } from "@hooks";

import { getProperty } from "@utils";

import type { Palette } from "@services/Theme.service";

import styles from "./SongCard.module.scss";

interface SongCardProps {
    num: number;
    song: Song;
    palette?: Palette;
}

const SongCard: FC<SongCardProps> = ({ num, song, palette = "primary" }) => {
    const cardRef = useRef(null);

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

const getStyle = (isHover: boolean, palette: Palette): CSSProperties => ({
    color: isHover
        ? getProperty("color-hover", palette)
        : getProperty("color", palette),
    backgroundColor: isHover
        ? getProperty("bg-hover", palette)
        : getProperty("bg", palette),
});

export default memo(SongCard);
