import { FC, memo } from "react";

import Icon, { type SvgProps } from "@components/ui/catalog/Icon/Icon";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelMenuItemProps {
    name: string;
    svg: FC<SvgProps>;
}

const DropdownPanelMenuItem: FC<DropdownPanelMenuItemProps> = ({
    name,
    svg,
}) => {
    return (
        <div className={styles.panel__menu__item}>
            <div className={styles.panel__menu__item__icon}>
                <Icon svg={svg} />
            </div>

            <div>{name}</div>
        </div>
    );
};

export default memo(DropdownPanelMenuItem);
