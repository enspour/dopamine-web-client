import { memo } from "react";

import MenuModal from "./modals/MenuModal/MenuModal";
import SearchModal from "./modals/SearchModal/SearchModal";
import SettingsModal from "./modals/SettingsModal/SettingsModal";

const Modals = () => {
    return (
        <>
            <MenuModal />
            <SearchModal />
            <SettingsModal />
        </>
    );
};

export default memo(Modals);
