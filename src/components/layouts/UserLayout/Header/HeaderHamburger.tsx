import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useMenuModal } from "@features/modals/client";

import HamburgerMenuIcon from "@assets/icons/header/hamburger.svg";

import styles from "./Header.module.scss";

const HeaderHamburger: FC = () => {
    const { open } = useMenuModal();

    return (
        <div className={styles.header__hamburger}>
            <Icon svg={HamburgerMenuIcon} onClick={open} />
        </div>
    );
};

export default memo(HeaderHamburger);
