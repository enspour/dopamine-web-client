import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import VerticalList from "@components/ui/catalog/VerticalList/VerticalList";
import VerticalListElement from "@components/ui/catalog/VerticalList/VerticalListElement";
import DropdownPanelMenuItem from "./DropdownPanelMenuItem";

import { useSettingsModal } from "@features/modals/client";

import { AuthApi } from "@features/authorization";

import ChannelIcon from "@assets/icons/header/channel.svg";
import LogoutIcon from "@assets/icons/header/logout.svg";
import SettingsIcon from "@assets/icons/header/settings.svg";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelMenuProps {
    close: () => void;
}

const DropdownPanelMenu: FC<DropdownPanelMenuProps> = ({ close }) => {
    const router = useRouter();

    const { open: openSettingsModal } = useSettingsModal();

    const openChannel = () => {
        close();
        router.push("/channel");
    };

    const openSettings = () => {
        close();
        openSettingsModal();
    };

    const logout = async () => {
        close();

        const response = await AuthApi.logout();

        if (response.statusCode === 200) {
            router.push("/login");
        }
    };

    return (
        <div className={styles.panel__menu}>
            <VerticalList>
                <VerticalListElement onClick={openChannel}>
                    <DropdownPanelMenuItem id="channel" svg={ChannelIcon} />
                </VerticalListElement>

                <VerticalListElement onClick={openSettings}>
                    <DropdownPanelMenuItem id="settings" svg={SettingsIcon} />
                </VerticalListElement>

                <VerticalListElement onClick={logout}>
                    <DropdownPanelMenuItem id="logout" svg={LogoutIcon} />
                </VerticalListElement>
            </VerticalList>
        </div>
    );
};

export default memo(DropdownPanelMenu);
