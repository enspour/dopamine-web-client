import { memo, FC } from "react";

import type { Song } from "@interfaces";

import Icon from "../Icon/Icon";

import type { Palette } from "@services/Theme.service";

import { getProperty, toHHMMSS } from "@utils";

import LikeIcon from "@assets/icons/song-card/like.svg";
import MoreIcon from "@assets/icons/song-card/more.svg";

import styles from "./SongCard.module.scss";

interface SongCardControlsProps {
    song: Song;
    isHover: boolean;
    palette: Palette;
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
            <Icon svg={LikeIcon} color={getProperty("icon", palette)} />
            <Icon svg={MoreIcon} color={getProperty("icon", palette)} />
        </div>
    );
};

export default memo(SongCardControls);
