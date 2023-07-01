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

export interface HorizontalMenuStyle {
    justifyContent?: "flex-start" | "flex-end" | "center";
}

export const initialStyle: HorizontalMenuStyle = {
    justifyContent: "center",
};

interface HorizontalMenuProps {
    children: ReactNode[];
    style?: HorizontalMenuStyle;
    palette?: ThemePalette;
}

const HorizontalMenu: FC<HorizontalMenuProps> = ({
    children,
    style,
    palette = "primary",
}) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const modifiedOnClick = (child: ReactElement, index: number) => {
        return (e: MouseEvent<HTMLElement>) => {
            setActiveIndex(index);
            child.props.onClick(e);
        };
    };

    const cloned = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                onClick: modifiedOnClick(child, index),
                options: Object.assign({}, initialStyle, style),
                isActive: activeIndex === index,
                palette,
            } as any);
        }

        return child;
    });

    return <div className={styles.menu}>{cloned}</div>;
};

export default memo(HorizontalMenu);
