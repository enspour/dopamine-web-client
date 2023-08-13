"use client";

import { FC, memo, useState } from "react";

import Switcher from "@components/ui/catalog/Switcher/Switcher";

import styles from "./SearchModal.module.scss";

const SearchModalFiltersMenu: FC = () => {
    const [songs, setSongs] = useState(true);
    const [albums, setAlbums] = useState(true);
    const [artists, setArtists] = useState(true);

    return (
        <div className={styles.search__filters__items}>
            <Switcher label="Artists" value={artists} setValue={setArtists} />
            <Switcher label="Songs" value={songs} setValue={setSongs} />
            <Switcher label="Albums" value={albums} setValue={setAlbums} />
        </div>
    );
};

export default memo(SearchModalFiltersMenu);
