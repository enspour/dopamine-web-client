import { FC, memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { useAppDispatch } from "@redux/hooks";
import { openMenuModal } from "@redux/slices/modals.slice";

import HamburgerMenuIcon from "@assets/icons/header/hamburger.svg";

import styles from "./Header.module.scss";

const HeaderHamburger: FC = () => {
    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openMenuModal());
    };

    return (
        <div className={styles.header__hamburger}>
            <Icon svg={HamburgerMenuIcon} onClick={open} />
        </div>
    );
};

export default memo(HeaderHamburger);
