import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import HorizontalList from "@components/ui/catalog/HorizontalList/HorizontalList";
import HorizontalListElement from "@components/ui/catalog/HorizontalList/HorizontalListElement";
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
            <HorizontalList>
                <HorizontalListElement onClick={openChannel}>
                    <DropdownPanelMenuItem id="channel" svg={ChannelIcon} />
                </HorizontalListElement>

                <HorizontalListElement onClick={openSettings}>
                    <DropdownPanelMenuItem id="settings" svg={SettingsIcon} />
                </HorizontalListElement>

                <HorizontalListElement onClick={logout}>
                    <DropdownPanelMenuItem id="logout" svg={LogoutIcon} />
                </HorizontalListElement>
            </HorizontalList>
        </div>
    );
};

export default memo(DropdownPanelMenu);
