import { FC, memo } from "react";
import Image from "next/image";

import Icon from "../Icon/Icon";

import type { Song } from "@interfaces";

import PlayIcon from "@assets/icons/song-card/play.svg";

import styles from "./SongCard.module.scss";

interface SongCardImageProps {
    song: Song;
}

const SongCardImage: FC<SongCardImageProps> = ({ song }) => {
    return (
        <div className={styles.card__image}>
            <div className={styles.card__image__control}>
                <Icon svg={PlayIcon} color="#FFFFFF" />
            </div>

            <Image
                priority
                src={song.image}
                width={50}
                height={50}
                alt={song.name}
            />
        </div>
    );
};

export default memo(SongCardImage);
