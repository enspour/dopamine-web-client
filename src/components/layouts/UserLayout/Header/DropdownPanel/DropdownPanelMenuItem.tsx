import { FC, memo } from "react";

import Icon, { type SvgProps } from "@components/ui/catalog/Icon/Icon";

import { InterMessage } from "@features/inter/client";

import { HeaderDropdownMenuId } from "@interfaces";

import styles from "./DropdownPanel.module.scss";

interface DropdownPanelMenuItemProps {
    id: HeaderDropdownMenuId;
    svg: FC<SvgProps>;
}

const DropdownPanelMenuItem: FC<DropdownPanelMenuItemProps> = ({ id, svg }) => {
    return (
        <div className={styles.panel__menu__item}>
            <div className={styles.panel__menu__item__icon}>
                <Icon svg={svg} />
            </div>

            <div>
                <InterMessage id={`header.dropdown.menu.${id}.name`} />
            </div>
        </div>
    );
};

export default memo(DropdownPanelMenuItem);
