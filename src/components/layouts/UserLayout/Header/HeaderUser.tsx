"use client";

import { memo, useRef } from "react";

import DropdownPanel from "./DropdownPanel/DropdownPanel";

import { useOutsideClickAlerter } from "@hooks/client";

import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@redux/slices/user.slice";

import styles from "./Header.module.scss";

const HeaderUser = () => {
    const userRef = useRef(null);

    const user = useAppSelector(selectUser);

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
                <div className={styles.header__user__avatar}></div>
                <div className={styles.header__user__nickname}>
                    {user.nickname}
                </div>
            </div>

            <DropdownPanel isOpen={isOpen} close={close} />
        </div>
    );
};

export default memo(HeaderUser);
