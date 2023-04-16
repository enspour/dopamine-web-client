import { FC, Dispatch, SetStateAction, CSSProperties, useRef } from "react";

import Icon from "../Icon/Icon";

import { useIsFocus } from "@hooks";

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
    const inputRef = useRef(null);

    const isFocus = useIsFocus(inputRef);

    const clear = () => setValue("");

    return (
        <div
            ref={inputRef}
            className={styles.wrapper}
            style={getStyle(isFocus, palette)}
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

const getStyle = (isFocus: boolean, palette: Palette): CSSProperties => ({
    backgroundColor: getProperty("bg", palette),
    color: getProperty("color", palette),
    border: `.1rem solid ${
        isFocus
            ? getProperty("border-focus", palette)
            : getProperty("border", palette)
    }`,
});

export default Input;
