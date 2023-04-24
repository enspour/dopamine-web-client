import { useRef, memo, FC, CSSProperties } from "react";

import type { Song } from "@interfaces";

import SongCardInfo from "./SongCardInfo";
import SongCardImage from "./SongCardImage";
import SongCardControls from "./SongCardControls";

import { useIsHover } from "@hooks/useIsHover";

import { getThemeValue } from "@utils";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./SongCard.module.scss";

interface SongCardProps {
    num: number;
    song: Song;
    palette?: ThemePalette;
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

const getStyle = (isHover: boolean, palette: ThemePalette): CSSProperties => ({
    color: isHover
        ? getThemeValue("color-hover", palette)
        : getThemeValue("color", palette),
    backgroundColor: isHover
        ? getThemeValue("bg-hover", palette)
        : getThemeValue("bg", palette),
});

export default memo(SongCard);
