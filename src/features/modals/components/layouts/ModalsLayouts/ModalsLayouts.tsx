import { FC, ReactNode, memo } from "react";

import MenuModal from "../../modals/MenuModal/MenuModal";
import SearchModal from "../../modals/SearchModal/SearchModal";
import SettingsModal from "../../modals/SettingsModal/SettingsModal";

interface ModalsLayoutsProps {
    children: ReactNode | ReactNode[];
}

const ModalsLayouts: FC<ModalsLayoutsProps> = ({ children }) => {
    return (
        <>
            {children}

            <MenuModal />
            <SearchModal />
            <SettingsModal />
        </>
    );
};

export default memo(ModalsLayouts);
