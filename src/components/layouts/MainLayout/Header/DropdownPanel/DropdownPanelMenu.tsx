import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import HorizontalMenu from "@components/ui/navigation/HorizontalMenu/HorizontalMenu";
import HorizontalMenuButton from "@components/ui/navigation/HorizontalMenu/HorizontalMenuButton";

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
                    <div className={styles.panel__menu__item}>
                        <div className={styles.panel__menu__item__icon}>
                            <Icon svg={ChannelIcon} />
                        </div>

                        <div>Channel</div>
                    </div>
                </HorizontalMenuButton>

                <HorizontalMenuButton onClick={openSettings}>
                    <div className={styles.panel__menu__item}>
                        <div className={styles.panel__menu__item__icon}>
                            <Icon svg={SettingsIcon} />
                        </div>

                        <div>Settings</div>
                    </div>
                </HorizontalMenuButton>

                <HorizontalMenuButton onClick={logout}>
                    <div className={styles.panel__menu__item}>
                        <div className={styles.panel__menu__item__icon}></div>
                        <div>Logout</div>
                    </div>
                </HorizontalMenuButton>
            </HorizontalMenu>
        </div>
    );
};

export default memo(DropdownPanelMenu);
