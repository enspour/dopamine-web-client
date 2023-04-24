import {
    useEffect,
    useRef,
    memo,
    FC,
    Dispatch,
    SetStateAction,
    CSSProperties,
} from "react";

import { getThemeValue } from "@utils";

import type { ThemePalette } from "@services/Theme.service";

import styles from "./Switcher.module.scss";

interface SwitcherProps {
    label: string;
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
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
                getThemeValue("switcher-active", palette)
            );

            switcher.style.setProperty(
                "--active-inner",
                getThemeValue("switcher-active-inner", palette)
            );

            switcher.style.setProperty(
                "--border",
                getThemeValue("border", palette)
            );

            switcher.style.setProperty(
                "--border-hover",
                getThemeValue("border-hover", palette)
            );

            switcher.style.setProperty(
                "--border-focus",
                getThemeValue("border-focus", palette)
            );

            switcher.style.setProperty(
                "--background",
                getThemeValue("bg", palette)
            );

            switcher.style.setProperty(
                "--disabled",
                getThemeValue("switcher-disabled", palette)
            );

            switcher.style.setProperty(
                "--disabled-inner",
                getThemeValue("switcher-disabled-inner", palette)
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
    color: getThemeValue("color", palette),
});

export default memo(Switcher);
