import {
    FC,
    Dispatch,
    SetStateAction,
    CSSProperties,
    useEffect,
    useRef,
} from "react";

import { getProperty } from "@utils";

import type { Palette } from "@services/Theme.service";

import styles from "./Switcher.module.scss";

interface SwitcherProps {
    label: string;
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    disabled?: boolean;
    palette?: Palette;
}

const Switcher: FC<SwitcherProps> = ({
    label,
    value,
    setValue,
    disabled = false,
    palette = "primary",
}) => {
    const switcherRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const switcher = switcherRef.current;

        if (switcher) {
            switcher.style.setProperty(
                "--active",
                getProperty("switcher-active", palette)
            );

            switcher.style.setProperty(
                "--active-inner",
                getProperty("switcher-active-inner", palette)
            );

            switcher.style.setProperty(
                "--border",
                getProperty("border", palette)
            );

            switcher.style.setProperty(
                "--border-hover",
                getProperty("border-hover", palette)
            );

            switcher.style.setProperty(
                "--border-focus",
                getProperty("border-focus", palette)
            );

            switcher.style.setProperty(
                "--background",
                getProperty("bg", palette)
            );

            switcher.style.setProperty(
                "--disabled",
                getProperty("switcher-disabled", palette)
            );

            switcher.style.setProperty(
                "--disabled-inner",
                getProperty("switcher-disabled-inner", palette)
            );
        }
    }, []); // eslint-disable-line

    return (
        <label className={styles.wrapper} style={getStyle(palette)}>
            <input
                ref={switcherRef}
                className={styles.switcher}
                type="checkbox"
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
                disabled={disabled}
            />

            <div>{label}</div>
        </label>
    );
};

const getStyle = (palette: Palette): CSSProperties => ({
    color: getProperty("color", palette),
});

export default Switcher;
