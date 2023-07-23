import {
    Children,
    FC,
    ReactNode,
    cloneElement,
    isValidElement,
    useEffect,
    useRef,
} from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Select.module.scss";

interface SelectProps {
    children: ReactNode[];
    currentId: string;
    palette?: ThemePalette;
}

const Select: FC<SelectProps> = ({
    children,
    currentId,
    palette = "primary",
}) => {
    const selectRef = useRef<HTMLDivElement>(null);

    const cloned = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                isActive: currentId === child.props.id,
                palette,
            } as any);
        }

        return child;
    });

    useEffect(() => {
        const select = selectRef.current;

        if (select) {
            select.style.setProperty(
                "--scroll-thumb",
                getThemePropertyValue("scroll-thumb", palette)
            );

            select.style.setProperty(
                "--scroll-thumb-hover",
                getThemePropertyValue("scroll-thumb-hover", palette)
            );
        }
    }, []); //eslint-disable-line

    return (
        <div ref={selectRef} className={styles.select}>
            {cloned}
        </div>
    );
};

export default Select;
