"use client";

import Icon from "@components/ui/catalog/Icon/Icon";

import { closeMenuModal } from "@features/modals/redux/slices/modals.slice";
import { useAppDispatch } from "@redux/hooks";

import BackIcon from "@features/modals/assets/icons/back.svg";

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
