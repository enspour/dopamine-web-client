import {
    Children,
    FC,
    MouseEvent,
    ReactElement,
    ReactNode,
    cloneElement,
    isValidElement,
    memo,
    useState,
} from "react";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./HorizontalMenu.module.scss";

export interface HorizontalMenuItemOptions {
    gap?: string;
    justifyContent?: "flex-start" | "flex-end" | "center";
}

export const initialItemOptions: HorizontalMenuItemOptions = {
    gap: "2rem",
    justifyContent: "center",
};

interface HorizontalMenuProps {
    children: ReactNode[];
    itemOptions?: HorizontalMenuItemOptions;
    palette?: ThemePalette;
}

const HorizontalMenu: FC<HorizontalMenuProps> = ({
    children,
    itemOptions,
    palette = "primary",
}) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const getOnClick = (child: ReactElement, index: number) => {
        return (e: MouseEvent<HTMLElement>) => {
            setActiveIndex(index);
            child.props.onClick(e);
        };
    };

    const cloned = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                onClick: getOnClick(child, index),
                options: Object.assign({}, initialItemOptions, itemOptions),
                isActive: activeIndex === index,
                palette,
            } as any);
        }

        return child;
    });

    return <div className={styles.menu}>{cloned}</div>;
};

export default memo(HorizontalMenu);
