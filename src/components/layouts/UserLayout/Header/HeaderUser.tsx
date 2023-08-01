"use client";

import { memo, useRef } from "react";

import SkeletonCircle from "@components/ui/skeletons/Skeleton/SkeletonCircle";
import DropdownPanel from "./DropdownPanel/DropdownPanel";

import { useOutsideClickAlerter } from "@hooks/client";

import { useUser } from "@features/users/client";

import styles from "./Header.module.scss";

const HeaderUser = () => {
    const userRef = useRef<HTMLDivElement>(null);

    const { user } = useUser();

    const [isOpen, setIsOpen] = useOutsideClickAlerter(userRef);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const close = () => {
        setIsOpen(false);
    };

    return (
        <div ref={userRef} className={styles.header__user}>
            <div className={styles.header__user__info} onClick={toggle}>
                <div className={styles.header__user__avatar}>
                    <SkeletonCircle style={{ diameter: "3.5rem" }} />
                </div>

                <div className={styles.header__user__nickname}>
                    {user.nickname}
                </div>
            </div>

            <DropdownPanel isOpen={isOpen} close={close} />
        </div>
    );
};

export default memo(HeaderUser);
