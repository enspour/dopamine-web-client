import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

import { useUser } from "@features/users/client";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelUserProps {
    close: () => void;
}

const DropdownPanelUser: FC<DropdownPanelUserProps> = ({ close }) => {
    const router = useRouter();

    const { user } = useUser();

    const openAccount = () => {
        close();
        router.push(`/accounts/@${user.name}`);
    };

    return (
        <div className={styles.panel__user} onClick={openAccount}>
            <div className={styles.panel__user__avatar}>
                <SkeletonCircle style={{ diameter: "6rem" }} />
            </div>

            <div>
                <div className={styles.panel__user__nickname}>
                    {user.nickname}
                </div>

                <div className={styles.panel__user__name}>@{user.name}</div>
            </div>
        </div>
    );
};

export default memo(DropdownPanelUser);
