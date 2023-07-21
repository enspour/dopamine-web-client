import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import Button from "@components/ui/catalog/Button/Button";
import Icon from "@components/ui/catalog/Icon/Icon";

import type { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";
import type { Menu } from "./SettingsModal";

import { InterMessage } from "@features/internationalization/client";

import { AuthApi } from "@api";

import BackIcon from "@assets/icons/settings/back.svg";

import styles from "./SettingsModal.module.scss";

const SettingsModalHeader: FC<CarouselMenuItemProps<Menu>> = ({
    current,
    back,
}) => {
    const router = useRouter();

    const logout = async () => {
        const response = await AuthApi.logout();

        if (response.statusCode === 200) {
            router.push("/login");
        }
    };

    return (
        <div className={styles.header}>
            {current === "settings" ? (
                <div className={styles.header__title}>
                    <div>
                        <InterMessage id="settings.menu.title" />
                    </div>
                </div>
            ) : (
                <Button onClick={back} width="min-content">
                    <div className={styles.header__btn}>
                        <Icon svg={BackIcon} />

                        <div>
                            <InterMessage
                                id={`settings.menu.${current}.name`}
                            />
                        </div>
                    </div>
                </Button>
            )}

            <div className={styles.header__user}>
                <div className={styles.header__user__avatar}></div>

                <Button width="13rem" onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default memo(SettingsModalHeader);
