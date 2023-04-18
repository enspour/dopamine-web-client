import {
    useRef,
    useEffect,
    FC,
    Dispatch,
    SetStateAction,
    CSSProperties,
} from "react";

import Icon from "../Icon/Icon";

import { useIsFocus, useIsHover } from "@hooks";

import { getProperty } from "@utils";

import type { Palette } from "@services/Theme.service";

import ClearIcon from "@assets/icons/input/clear.svg";

import styles from "./Input.module.scss";

interface InputProps {
    type?: "text" | "password";
    placeholder?: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    palette?: Palette;
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
                getProperty("placeholder", palette)
            );

            wrapper.style.setProperty(
                "--border-focus",
                getProperty("border-focus", palette)
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
    palette: Palette
): CSSProperties => ({
    backgroundColor: getProperty("bg", palette),
    color: getProperty("color", palette),
    border: `.1rem solid ${
        isHover || isFocus
            ? getProperty("border-hover", palette)
            : getProperty("border", palette)
    }`,
});

export default Input;
