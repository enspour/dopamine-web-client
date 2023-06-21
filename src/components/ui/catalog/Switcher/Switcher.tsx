import { CSSProperties, FC, memo, useEffect, useRef } from "react";

import { getThemePropertyValue } from "@utils";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./Switcher.module.scss";

interface SwitcherProps {
    label: string;
    value: boolean;
    setValue: (value: boolean) => void;
    disabled?: boolean;
    palette?: ThemePalette;
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
                getThemePropertyValue("switcher-active", palette)
            );

            switcher.style.setProperty(
                "--active-inner",
                getThemePropertyValue("switcher-active-inner", palette)
            );

            switcher.style.setProperty(
                "--border",
                getThemePropertyValue("border", palette)
            );

            switcher.style.setProperty(
                "--border-hover",
                getThemePropertyValue("border-hover", palette)
            );

            switcher.style.setProperty(
                "--border-focus",
                getThemePropertyValue("border-focus", palette)
            );

            switcher.style.setProperty(
                "--background",
                getThemePropertyValue("bg", palette)
            );

            switcher.style.setProperty(
                "--disabled",
                getThemePropertyValue("switcher-disabled", palette)
            );

            switcher.style.setProperty(
                "--disabled-inner",
                getThemePropertyValue("switcher-disabled-inner", palette)
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

const getStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(Switcher);
