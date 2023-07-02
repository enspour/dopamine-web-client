import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import HorizontalMenu from "@components/ui/navigation/HorizontalMenu/HorizontalMenu";
import HorizontalMenuButton from "@components/ui/navigation/HorizontalMenu/HorizontalMenuButton";
import DropdownPanelMenuItem from "./DropdownPanelMenuItem";

import { useAppDispatch } from "@redux/hooks";
import { openSettingsModal } from "@redux/slices/modals.slice";

import { AuthApi } from "@api";

import ChannelIcon from "@assets/icons/header/channel.svg";
import SettingsIcon from "@assets/icons/header/settings.svg";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelMenuProps {
    close: () => void;
}

const DropdownPanelMenu: FC<DropdownPanelMenuProps> = ({ close }) => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const openChannel = () => {
        close();
        router.push("/channel");
    };

    const openSettings = () => {
        close();
        dispatch(openSettingsModal());
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
            <HorizontalMenu>
                <HorizontalMenuButton onClick={openChannel}>
                    <DropdownPanelMenuItem name="Channel" svg={ChannelIcon} />
                </HorizontalMenuButton>

                <HorizontalMenuButton onClick={openSettings}>
                    <DropdownPanelMenuItem name="Settings" svg={SettingsIcon} />
                </HorizontalMenuButton>

                <HorizontalMenuButton onClick={logout}>
                    <DropdownPanelMenuItem name="Logout" svg={ChannelIcon} />
                </HorizontalMenuButton>
            </HorizontalMenu>
        </div>
    );
};

export default memo(DropdownPanelMenu);
