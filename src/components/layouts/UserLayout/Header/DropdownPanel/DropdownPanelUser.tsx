import { useRouter } from "next/navigation";
import { FC, memo } from "react";

import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@redux/slices/user.slice";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelUserProps {
    close: () => void;
}

const DropdownPanelUser: FC<DropdownPanelUserProps> = ({ close }) => {
    const router = useRouter();

    const user = useAppSelector(selectUser);

    const openAccount = () => {
        close();
        router.push(`/accounts/${user.id}`);
    };

    return (
        <div className={styles.panel__user} onClick={openAccount}>
            <div className={styles.panel__user__avatar}></div>

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