"use client";

import { memo, useRef } from "react";

import ContextMenu from "@components/ui/catalog/ContextMenu/ContextMenu";
import SkeletonCircle from "@components/ui/catalog/Skeleton/SkeletonCircle";

import DropdownPanel from "./DropdownPanel/DropdownPanel";

import { useUser } from "@features/users/client";

import styles from "./Header.module.scss";

const HeaderUser = () => {
    const userRef = useRef<HTMLDivElement>(null);

    const { user } = useUser();

    return (
        <div ref={userRef} className={styles.header__user}>
            <ContextMenu style={{ location: "right" }}>
                <div className={styles.header__user__info}>
                    <div className={styles.header__user__avatar}>
                        <SkeletonCircle style={{ diameter: "3.5rem" }} />
                    </div>

                    <div className={styles.header__user__nickname}>
                        {user.nickname}
                    </div>
                </div>

                <DropdownPanel />
            </ContextMenu>
        </div>
    );
};

export default memo(HeaderUser);
