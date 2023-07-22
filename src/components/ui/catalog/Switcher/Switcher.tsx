"use client";

import { CSSProperties, FC, memo, useEffect, useRef } from "react";

import { getThemePropertyValue, type ThemePalette } from "@features/theme";

import styles from "./Switcher.module.scss";

type SwitcherLabelPosition = "right" | "left";

interface SwitcherProps {
    label: string;
    value: boolean;
    setValue: (value: boolean) => void;
    position?: SwitcherLabelPosition;
    disabled?: boolean;
    palette?: ThemePalette;
}

const Switcher: FC<SwitcherProps> = ({
    label,
    value,
    setValue,
    position = "right",
    disabled = false,
    palette = "switcher",
}) => {
    const switcherRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const switcher = switcherRef.current;

        if (switcher) {
            switcher.style.setProperty(
                "--active",
                getThemePropertyValue("active", palette)
            );

            switcher.style.setProperty(
                "--active-inner",
                getThemePropertyValue("active-inner", palette)
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
                getThemePropertyValue("disabled", palette)
            );

            switcher.style.setProperty(
                "--disabled-inner",
                getThemePropertyValue("disabled-inner", palette)
            );
        }
    }, []); // eslint-disable-line

    return (
        <label className={styles.wrapper} style={getStyle(palette)}>
            {position === "left" && <div>{label}</div>}

            <input
                ref={switcherRef}
                className={styles.switcher}
                type="checkbox"
                checked={value}
                onChange={(e) => setValue(e.target.checked)}
                disabled={disabled}
            />

            {position === "right" && <div>{label}</div>}
        </label>
    );
};

const getStyle = (palette: ThemePalette): CSSProperties => ({
    color: getThemePropertyValue("color", palette),
});

export default memo(Switcher);
