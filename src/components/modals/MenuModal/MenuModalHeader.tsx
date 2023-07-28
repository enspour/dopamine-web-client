"use client";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useAppDispatch } from "@redux/hooks";
import { closeMenuModal } from "@redux/slices/modals.slice";

import BackIcon from "@assets/icons/modal/back.svg";

import styles from "./MenuModal.module.scss";

const MenuModalHeader = () => {
    const dispatch = useAppDispatch();

    const close = () => {
        dispatch(closeMenuModal());
    };

    return (
        <div className={styles.menu__header} onClick={close}>
            <Icon svg={BackIcon} />
            <div className={styles.menu__header__title}>Menu</div>
        </div>
    );
};

export default MenuModalHeader;
