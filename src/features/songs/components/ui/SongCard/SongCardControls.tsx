import { FC, memo } from "react";

import FormatTimeHHMMSS from "@components/others/FormatTimeHHMMSS";
import Icon from "@components/ui/catalog/Icon/Icon";

import { type ThemePalette } from "@features/theme";

import type { Song } from "@features/songs";

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
        return (
            <div>
                <FormatTimeHHMMSS seconds={song.time} />
            </div>
        );
    }

    return (
        <div className={styles.card__controls}>
            <Icon svg={LikeIcon} palette={palette} />
            <Icon svg={MoreIcon} palette={palette} />
        </div>
    );
};

export default memo(SongCardControls);
