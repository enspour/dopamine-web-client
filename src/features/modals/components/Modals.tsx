import { memo } from "react";

import CreatePostModal from "./modals/CreatePostModal/CreatePostModal";
import MenuModal from "./modals/MenuModal/MenuModal";
import SearchModal from "./modals/SearchModal/SearchModal";
import SettingsModal from "./modals/SettingsModal/SettingsModal";

const Modals = () => {
    return (
        <>
            <MenuModal />
            <SearchModal />
            <SettingsModal />
            <CreatePostModal />
        </>
    );
};

export default memo(Modals);
