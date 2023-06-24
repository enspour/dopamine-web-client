import { memo, useRef, useState } from "react";

import Button from "@components/ui/catalog/Button/Button";
import Dropdown from "@components/ui/catalog/Dropdown/Dropdown";
import Switcher from "@components/ui/catalog/Switcher/Switcher";

import { useOutsideClickAlerter } from "@hooks/client";

import styles from "./SearchModal.module.scss";

const SearchModalFilters = () => {
    const filtersRef = useRef(null);

    const [isOpen, setIsOpen] = useOutsideClickAlerter(filtersRef);

    const [songs, setSongs] = useState(true);
    const [albums, setAlbums] = useState(true);
    const [artists, setArtists] = useState(true);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div ref={filtersRef} className={styles.search__filters}>
            <Button onClick={toggle} height="3rem" width="8rem">
                Filters
            </Button>

            <Dropdown
                isOpen={isOpen}
                style={{ gap: "0.5rem" }}
                location="right"
            >
                <div className={styles.search__filters__items}>
                    <Switcher
                        label="Artists"
                        value={artists}
                        setValue={setArtists}
                    />

                    <Switcher label="Songs" value={songs} setValue={setSongs} />

                    <Switcher
                        label="Albums"
                        value={albums}
                        setValue={setAlbums}
                    />
                </div>
            </Dropdown>
        </div>
    );
};

export default memo(SearchModalFilters);
