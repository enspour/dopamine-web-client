"use client";

import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import Button from "@components/ui/catalog/Button/Button";
import Icon from "@components/ui/catalog/Icon/Icon";
import SkeletonCircle from "@components/ui/skeletons/Skeleton/SkeletonCircle";
import SettingsModalHeaderTitle from "./SettingsModalHeaderTitle";

import type { CarouselMenuItemProps } from "@components/ui/navigation/CarouselMenu/CarouselMenu";
import type { Menu } from "./SettingsModal";

import { InterMessage } from "@features/inter/client";

import { AuthApi } from "@features/authorization";

import BackIcon from "@features/modals/assets/icons/settings/back.svg";

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
                <SettingsModalHeaderTitle />
            ) : (
                <Button onClick={back} width="min-content">
                    <div className={styles.header__btn}>
                        <Icon svg={BackIcon} />
                        <InterMessage id={`settings.menu.${current}.name`} />
                    </div>
                </Button>
            )}

            <div className={styles.header__user}>
                <div className={styles.header__user__avatar}>
                    <SkeletonCircle style={{ diameter: "5rem" }} />
                </div>

                <Button width="13rem" onClick={logout}>
                    <InterMessage id="settings.menu.header.logout.title" />
                </Button>
            </div>
        </div>
    );
};

export default memo(SettingsModalHeader);
