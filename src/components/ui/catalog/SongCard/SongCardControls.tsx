import { FC, memo } from "react";

import Icon from "../Icon/Icon";

import { type ThemePalette } from "@features/theme";

import type { Song } from "@interfaces";

import { toHHMMSS } from "@utils";

import LikeIcon from "@assets/icons/song-card/like.svg";
import MoreIcon from "@assets/icons/song-card/more.svg";

import styles from "./SongCard.module.scss";

interface SongCardControlsProps {
    song: Song;
    isHover: boolean;
    palette: ThemePalette;
}

const SongCardControls: FC<SongCardControlsProps> = ({
    song,
    isHover,
    palette,
}) => {
    if (!isHover) {
        return <div>{toHHMMSS(song.time)}</div>;
    }

    return (
        <div className={styles.card__controls}>
            <Icon svg={LikeIcon} palette={palette} />
            <Icon svg={MoreIcon} palette={palette} />
        </div>
    );
};

export default memo(SongCardControls);
