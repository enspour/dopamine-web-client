"use client";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useMenuModal } from "@features/modals/client";

import BackIcon from "@features/modals/assets/icons/general/back.svg";

import styles from "./MenuModal.module.scss";

const MenuModalHeader = () => {
    const { close } = useMenuModal();

    return (
        <div className={styles.menu__header} onClick={close}>
            <Icon svg={BackIcon} />
            <div className={styles.menu__header__title}>Menu</div>
        </div>
    );
};

export default MenuModalHeader;
