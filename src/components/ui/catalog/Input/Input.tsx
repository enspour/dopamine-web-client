import {
    useRef,
    useEffect,
    memo,
    FC,
    Dispatch,
    SetStateAction,
    CSSProperties,
} from "react";

import Icon from "../Icon/Icon";

import useIsFocus from "@hooks/useIsFocus";
import useIsHover from "@hooks/useIsHover";

import { getThemeValue } from "@utils";

import type { ThemePalette } from "@services/Theme.service";

import ClearIcon from "@assets/icons/input/clear.svg";

import styles from "./Input.module.scss";

interface InputProps {
    type?: "text" | "password";
    placeholder?: string;
    value: string;
    setValue: (value: string) => void;
    palette?: ThemePalette;
}

const Input: FC<InputProps> = ({
    type = "text",
    placeholder,
    value,
    setValue,
    palette = "primary",
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const isHover = useIsHover(wrapperRef);
    const isFocus = useIsFocus(wrapperRef);

    const clear = () => setValue("");

    useEffect(() => {
        const wrapper = wrapperRef.current;

        if (wrapper) {
            wrapper.style.setProperty(
                "--placeholder",
                getThemeValue("placeholder", palette)
            );

            wrapper.style.setProperty(
                "--border-focus",
                getThemeValue("border-focus", palette)
            );
        }
    }, []); //eslint-disable-line

    return (
        <div
            ref={wrapperRef}
            className={styles.wrapper}
            style={getStyle(isHover, isFocus, palette)}
        >
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {(isFocus || value) && (
                <div className={styles.input__controls}>
                    <Icon svg={ClearIcon} onClick={clear} />
                </div>
            )}
        </div>
    );
};

const getStyle = (
    isHover: boolean,
    isFocus: boolean,
    palette: ThemePalette
): CSSProperties => ({
    backgroundColor: getThemeValue("bg", palette),
    color: getThemeValue("color", palette),
    border: `.1rem solid ${
        isHover || isFocus
            ? getThemeValue("border-hover", palette)
            : getThemeValue("border", palette)
    }`,
});

export default memo(Input);
